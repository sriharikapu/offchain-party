import React, { Component } from 'react';
import { DrizzleProvider } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';
import { Router } from '@reach/router';

import drizzleOptions from './drizzleOptions';
import Landing from './pages/Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <Landing path="/" />
        <div path="/1">
          <DrizzleProvider options={drizzleOptions}>
            <LoadingContainer />
          </DrizzleProvider>
        </div>
      </Router>
    );
  }
}

export default App;
