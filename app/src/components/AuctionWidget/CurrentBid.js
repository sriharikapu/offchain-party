import React from 'react';
import styled from 'styled-components';

const CurrentBidContainer = styled.div`
  flex: 1;
  max-width: 180px;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 0.9em;
`;

const StatusWrapper = styled.div`
  font-size: 0.8em;
`;

const StatusMessage = styled.strong``;

const StatusDescription = styled.p`
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.47);
`;

const CurrentBid = props => {
  return (
    <CurrentBidContainer>
      <Title>Current Bid</Title>
      <StatusWrapper>
        {props.currentWinningBid ? (
          <StatusMessage>{props.currentWinningBid}</StatusMessage>
        ) : (
          <StatusMessage>No bids yet.</StatusMessage>
        )}
        <StatusDescription>
          The minimum is 0.5 ETH. Be the first to bid!
        </StatusDescription>
      </StatusWrapper>
    </CurrentBidContainer>
  );
};

export default CurrentBid;
