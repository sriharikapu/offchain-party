import Experience from './Experience';
import { drizzleConnect } from 'drizzle-react';

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  };
};

const ExperienceContainer = drizzleConnect(Experience, mapStateToProps);

export default ExperienceContainer;
