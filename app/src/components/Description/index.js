import React from 'react';
import styled from 'styled-components';

const PrimaryDescription = styled.p`
  font-size: 0.6em;
  color: rgba(255, 255, 255, 0.47);
  font-weight: normal;
  letter-spacing: 0.01em;
`;

const Description = () => (
  <PrimaryDescription>
    Crackadoom is a short 4-track EP album Mngwa has recorded in the summer
    2018. It is scheduled to be released in summer 2019 but the patron who wins
    this ticket will get to listen to it right after the auction ends (Midnight
    Feb 18th). By claiming this experience you support the production of our
    full-length album that is coming out in April.
  </PrimaryDescription>
);

export default Description;
