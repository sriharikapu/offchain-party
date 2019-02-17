import React from 'react';
import styled from 'styled-components';
import { drizzleConnect } from 'drizzle-react';
import CountdownTimer from './CountdownTimer';
import CurrentBid from './CurrentBid';
import BidContainer from './BidContainer';

const AuctionStatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class AuctionWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      currentWinningBid: 0
    };
  }

  updateCurrentBid(val) {
    this.setState({ currentWinningBid: val });
  }

  render() {
    return (
      <div>
        <AuctionStatusWrapper>
          <CountdownTimer />
          <CurrentBid currentWinningBid={this.state.currentWinningBid} />
        </AuctionStatusWrapper>
        <BidContainer updateCurrentBid={this.updateCurrentBid.bind(this)} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  };
};

export default drizzleConnect(AuctionWidget, mapState);
