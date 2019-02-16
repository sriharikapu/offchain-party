import React from 'react';
import styled from 'styled-components';
import CountdownTimer from './CountdownTimer';
import CurrentBid from './CurrentBid';
import BidContainer from './BidContainer';

const AuctionWidget = () => (
  <div>
    <CountdownTimer />
    <CurrentBid />
    <BidContainer />
  </div>
);

export default AuctionWidget;
