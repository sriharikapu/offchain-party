import React, { Component } from 'react';

import { Router } from '@reach/router';

import Landing from './pages/Landing';
import Experience from './pages/Experience';

class App extends Component {
  render() {
    return (
      <Router>
        <Landing path="/" />
        <Experience path="/1" />
      </Router>
    );
  }
}

export default App;
