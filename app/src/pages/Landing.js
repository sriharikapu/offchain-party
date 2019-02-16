import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Slogan = styled.div`
  text-align: center;
  max-width: 70em;
  margin: 0 auto;
`;

const Landing = () => (
  <div>
    <Layout>
      <Slogan>
        Support meaningful art
        <br /> Collect unique experiences
      </Slogan>
    </Layout>
  </div>
);

export default Landing;
