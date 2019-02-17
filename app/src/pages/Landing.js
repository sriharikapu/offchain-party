import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link } from '@reach/router';

import BannerImage from '../components/BannerImage';
import Button from '../components/Button';

const Slogan = styled.div`
  text-align: center;
  max-width: 70em;
  margin: 0 auto 3em;
`;

const P = styled.p`
  font-size: 16px;
  margin-bottom: 2em;
  opacity: 0.6;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 3em;
`;

const Title = styled.h1`
  color: #995bd4;
  text-align: center;
  margin-top: 2em;
  font-size: 20px;
`;

const linkStyles = { textDecoration: 'none', color: 'inherit' };

const Landing = () => (
  <div>
    <Layout>
      <Slogan>
        Support meaningful art
        <br /> Collect unique experiences
      </Slogan>
      <P>
        Let's play a game. This NFT will give you access to a pre-release of a
        4-track album that the rest of the world will hear only in the Summer
        2019. But one of you will get to listen to it tonight.
      </P>
      <Link style={linkStyles} to="/1">
        <BannerImage />
      </Link>
      <ButtonContainer>
        <Link to="/1">
          <Button>Make an offer</Button>
        </Link>
      </ButtonContainer>
      <P>
        By participating in this auction you support the band directly and help
        charity (20% of proceeds will go to Electronic Fronteer Foundation).
      </P>

      <Title>Why?</Title>
      <P>
        We believe that we can create a community of artists and musicians
        incentivized to offer amazing unique experiences to their biggest
        followers. Imagine connecting to your favorite artists directly and
        receiving unforgettable life-changing experiences from them in exchange
        to funding the projects that resonate with your values.
      </P>
    </Layout>
  </div>
);

export default Landing;
