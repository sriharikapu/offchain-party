import React from 'react';
import { ReactComponent as Logo } from '../../assets/ocp-logo.svg';
import styled from 'styled-components';

const Header = styled.div`
  margin-bottom: 3em;
`;

const Layout = ({ children }) => (
  <div>
    <Header>
      <Logo />
    </Header>
    {children}
  </div>
);

export default Layout;
