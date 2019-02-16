import React from 'react';

import { drizzleConnect } from 'drizzle-react';

const Landing = ({ accounts }) => <div>test</div>;

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  };
};

export default drizzleConnect(Landing, mapStateToProps);
