import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { ReactComponent as Logo } from '../../assets/ocp-logo.svg';
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
      <Link to="/">
        <Logo />
      </Link>
    </Header>
    <Container>{children}</Container>
  </div>
);

export default Layout;
