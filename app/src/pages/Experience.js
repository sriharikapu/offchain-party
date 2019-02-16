import React from 'react';
import { DrizzleProvider } from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';
import drizzleOptions from '../drizzleOptions';

import Layout from '../components/Layout';

const Experience = () => (
  <DrizzleProvider options={drizzleOptions}>
    <LoadingContainer>
      <Layout>Experience page</Layout>
    </LoadingContainer>
  </DrizzleProvider>
);

export default Experience;
