import React from 'react';
import styled from 'styled-components';

const InputControl = styled.div`
  display: flex;
  width: 214px;
  margin: 50px 0px;
`;

const InputWrapper = styled.div`
  position: relative;
  height: 48px;
`;

const BidInput = styled.input.attrs({
  type: 'number'
})`
  flex: 3;
  flex-grow: 3;
  background-color: #202020;
  color: white;
  border: none;

  height: 48px;
  line-height: 48px;
  font-size: 25px;
  padding-left: 10px;
  border: solid 2px #202020;
`;

const Denomination = styled.div`
  position: absolute;
  right: 20px;
  top: 0px;
  line-height: 48px;
  color: rgba(255, 255, 255, 0.23);
`;

const BidButton = styled.button`
  flex: 2;
  flex-grow: 2;
  background-color: #995bd4;
  color: white;
  border: none;
  font-size: 1.2em;
  padding: 0px 30px;
  cursor: pointer;
`;

const BidContainer = () => (
  <InputControl>
    <InputWrapper>
      <BidInput autoFocus />
      <Denomination>ETH</Denomination>
    </InputWrapper>
    <BidButton>BID</BidButton>
  </InputControl>
);

export default BidContainer;
