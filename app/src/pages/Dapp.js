import React, { Component } from 'react';
import { DrizzleProvider } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';

import drizzleOptions from '../drizzleOptions';
import ExperienceContainer from './ExperienceContainer';

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <ExperienceContainer />
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
