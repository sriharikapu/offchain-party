import React from 'react';
import {
  AccountData,
  ContractData,
  ContractForm
} from 'drizzle-react-components';

const CurrentBid = () => {
  return (
    <div>
      <ContractData contract="Auction721" method="auction" />
    </div>
  );
};

export default CurrentBid;
