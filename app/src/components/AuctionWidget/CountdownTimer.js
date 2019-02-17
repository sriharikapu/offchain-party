import React from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown-now';

const TimerContainer = styled.div`
  flex: 1;
  max-width: 180px;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 0.9em;
`;

const TimerWrapper = styled.div`
  font-size: 0.8em;
`;

const LargeNumber = styled.span`
  display: inline-block;
  font-size: 1.5em;
  color: #995bd4;
  min-width: 32px;
`;

export default function AuctionEndCountDown() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Auction is over. The results will be published soon</div>;
    } else {
      // Render a countdown
      return (
        <TimerContainer>
          <Title>Time Left</Title>
          <TimerWrapper>
            <div>
              <LargeNumber>{days}</LargeNumber> {days === 1 ? 'day' : 'days'}
              <br />
              <LargeNumber>{hours}</LargeNumber>{' '}
              {hours === 1 ? 'hour' : 'hours'}
            </div>
            <div>
              <LargeNumber>{minutes}</LargeNumber>{' '}
              {minutes === 1 ? 'minute' : 'minutes'}
              <br />
              <LargeNumber>{seconds}</LargeNumber>{' '}
              {seconds === 1 ? 'second' : 'seconds'}
            </div>
          </TimerWrapper>
        </TimerContainer>
      );
    }
  };

  return (
    <Countdown
      date={
        new Date('Wed Feb 26 2019 23:59:59 GMT-0800 (Pacific Standard Time)')
      }
      renderer={renderer}
    />
  );
}
