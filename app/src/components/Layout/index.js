import React from 'react';
import { ReactComponent as Logo } from '../../assets/ocp-logo.svg';
import styled from 'styled-components';

const Header = styled.div`
  margin-bottom: 3em;
`;

const Container = styled.div`
  max-width: 20em;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <div>
    <Header>
      <Logo />
    </Header>
    <Container>{children}</Container>
  </div>
);

export default Layout;
