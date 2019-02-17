import React, { useState } from 'react';
import { DrizzleProvider } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';
import drizzleOptions from '../drizzleOptions';
import styled from 'styled-components';
import { convert } from 'ethereumjs-units';

import CrackadoomPlayer from '../components/CrackadoomPlayer';
import Layout from '../components/Layout';
import BannerImage from '../components/BannerImage';
import AuctionWidget from '../components/AuctionWidget';
import Web3Widget from '../components/Web3Widget';
import Description from '../components/Description';

const Container = styled.div``;

const Experience = ({ Auction721, web3 }) => {
  function adaptData(raw) {
    if (!raw || !raw['0x0'] || !web3) {
      return {};
    }
    const value = raw['0x0'].value;

    if (value) {
      return {
        price: convert(value.price, 'wei', 'eth'),
        winningAddress: value.winning,
        endsAtBlock: value.endsAtBlock
      };
    }
  }

  const auction = adaptData(Auction721.auction);

  console.log({ auction });
  const [loggedIn, setLoggedIn] = useState(true);
  const [auctionEnded, setAuctionEnded] = useState(false);
  const [isTokenOwner, setTokenOwner] = useState(false);
  function renderActionWidget() {
    if (loggedIn && !auctionEnded) {
      return (
        <Container>
          <BannerImage />
          <AuctionWidget auction={auction} />
        </Container>
      );
    }
    if (loggedIn && auctionEnded && isTokenOwner) {
      return <CrackadoomPlayer />;
    }
    return (
      <Container>
        <BannerImage />
        <Web3Widget />
      </Container>
    );
  }

  return (
    <Layout>
      {renderActionWidget()}
      <Description />
    </Layout>
  );
};

export default Experience;
