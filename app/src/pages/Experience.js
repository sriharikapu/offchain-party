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
  const [auctionEnded, setAuctionEnded] = useState(false);
  const [isTokenOwner, setTokenOwner] = useState(false);
  function renderActionWidget() {
    // AUCTION WIDGET - Auction live and user is logged in
    if (loggedIn && !auctionEnded) {
      return (
        <Container>
          <BannerImage />
          <AuctionWidget />
        </Container>
      );
    }

    // AUDIO PLAYER - User is logged in, auction is over and the user is the token owner
    if (loggedIn && auctionEnded && isTokenOwner) {
      return <CrackadoomPlayer />;
    }

    // WEB3 Login - User is not logged in
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
