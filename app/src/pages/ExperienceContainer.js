import Experience from './Experience';
import { drizzleConnect } from 'drizzle-react';

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    Auction721: state.contracts.Auction721,
    web3: state.web3
  };
};

const ExperienceContainer = drizzleConnect(Experience, mapStateToProps);

export default ExperienceContainer;
