import Auction721 from './contracts/Auction721.json';

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545'
    }
  },
  contracts: [Auction721],
  events: {
    // SimpleStorage: ["StorageSet"],
  },
  polls: {
    accounts: 1500
  }
};

export default options;
