import React from 'react';
import Countdown from 'react-countdown-now';

export default function AuctionEndCountDown() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Auction is over. The results will be published soon</div>;
    } else {
      // Render a countdown
      return (
        <div>
          <div>
            {days} {days === 1 ? 'day' : 'days'}, {hours}{' '}
            {hours === 1 ? 'hour' : 'hours'}
          </div>
          <div>
            {minutes} {minutes === 1 ? 'minute' : 'minutes'} {seconds}{' '}
            {seconds === 1 ? 'second' : 'seconds'}
          </div>
        </div>
      );
    }
  };

  return (
    <Countdown
      date={
        new Date('Wed Dec 26 2018 23:59:59 GMT-0800 (Pacific Standard Time)')
      }
      renderer={renderer}
    />
  );
}
