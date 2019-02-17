import React from 'react';
import styled from 'styled-components';
import { drizzleConnect } from 'drizzle-react';
import CountdownTimer from './CountdownTimer';
import CurrentBid from './CurrentBid';
import BidContainer from './BidContainer';

const AuctionWidget = props =>
  console.log(props) || (
    <div>
      <CountdownTimer />
      <CurrentBid />
      <BidContainer />
    </div>
  );

const mapState = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  };
};

export default drizzleConnect(AuctionWidget, mapState);
