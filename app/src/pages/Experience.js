import React, { useState } from 'react';
import { DrizzleProvider } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';
import drizzleOptions from '../drizzleOptions';
import styled from 'styled-components';

import CrackadoomPlayer from '../components/CrackadoomPlayer';
import Layout from '../components/Layout';
import BannerImage from '../components/BannerImage';
import AuctionWidget from '../components/AuctionWidget';
import Web3Widget from '../components/Web3Widget';
import Description from '../components/Description';

const Container = styled.div``;

const Experience = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [auctionEnded, setAuctionEnded] = useState(true);
  const [isTokenOwner, setTokenOwner] = useState(true);
  function renderActionWidget() {
    if (loggedIn && !auctionEnded) {
      return (
        <Container>
          <BannerImage />
          <AuctionWidget />
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
