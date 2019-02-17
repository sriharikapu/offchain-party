import React, { Component } from 'react';

import { Router } from '@reach/router';

import Landing from './pages/Landing';
import Dapp from './pages/Dapp';

class App extends Component {
  render() {
    return (
      <Router>
        <Landing path="/" />
        <Dapp path="/1" />
      </Router>
    );
  }
}

export default App;
