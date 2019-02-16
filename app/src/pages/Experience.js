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

const Experience = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  function renderActionWidget() {
    if (loggedIn) {
      return <AuctionWidget />;
    }
    return <CrackadoomPlayer />
  }

  return (
    <DrizzleProvider options={drizzleOptions}>
      <LoadingContainer>
        <Layout>
          <BannerImage />
          {renderActionWidget()}
          <Description />
        </Layout>
      </LoadingContainer>
    </DrizzleProvider>
  );
};

export default Experience;
