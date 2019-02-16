import React, { Component } from 'react';
import { DrizzleProvider } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';
import { Router } from '@reach/router';

import drizzleOptions from './drizzleOptions';
import Landing from './pages/Landing';

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <Router>
            <Landing path="/" />
          </Router>
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
