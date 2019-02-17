import React from 'react';
import Figure from '../../assets/crackadoom-figure.svg';
import styled from 'styled-components';

const BannerImage = styled.div`
  width: 337px;
  height: 202px;
  background: #202020;
  position: relative;
  margin-bottom: 20px;
`;

const ImageTitle = styled.strong`
  padding-top: 20px;
  padding-left: 10px;
  overflow: visible;
  display: block;
`;
const ImageSubtitle = styled.span`
  padding-left: 10px;
  display: block;
`;

const ImageCredits = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 0.6em;
`;

const ImageFigure = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const BannerImageComponent = () => {
  return (
    <BannerImage>
      <ImageTitle>Crackadoom EP</ImageTitle>
      <ImageSubtitle>pre-release</ImageSubtitle>
      <ImageCredits>by Mngwa</ImageCredits>
      <ImageFigure src={Figure} />
    </BannerImage>
  );
};

export default BannerImageComponent;
