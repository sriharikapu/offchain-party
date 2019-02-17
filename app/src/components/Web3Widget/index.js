import React from 'react';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';
import styled from 'styled-components';
import FortmaticLogo from '../../assets/fortmatic-logo.svg';

const ButtonGroup = styled.div``;

const FortmaticButton = styled.div`
  background-color: #995bd4;
  padding: 15px;
`;

// const PortisButton = styled.div`

// `;

// const BlocknativeButton = styled.div`

// `;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
  vertical-align: top;
  background-size: 50px;
  background-image: url(${props =>
    props.fortmatic ? FortmaticLogo : FortmaticLogo});
`;

const DescriptionWrapper = styled.div`
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
`;

const DescriptionTitle = styled.strong``;

const DescriptionSubtitle = styled.p`
  font-size: 0.6em;
`;

const Web3Widget = () => {
  const signIn = function(signInMethod) {
    if (signInMethod === 'fortmatic') {
      const fm = new Fortmatic(process.env.REACT_APP_FORTMATIC);
      window.web3 = new Web3(fm.getProvider());
      console.log(window.web3.currentProvider.enable());

      window.web3.eth.getAccounts(function(error, accounts) {
        if (error) throw error;
        console.log(accounts); // ['0x...']
      });
    }
  };

  return (
    <ButtonGroup>
      <FortmaticButton>
        <Logo fortmatic />
        <DescriptionWrapper onClick={signIn.bind(this, 'fortmatic')}>
          <DescriptionTitle>Fortmatic</DescriptionTitle>
          <DescriptionSubtitle>
            <p>
              Sign in Using phone number. <br /> No special browser required
            </p>
          </DescriptionSubtitle>
        </DescriptionWrapper>
      </FortmaticButton>

      {/* <Portis />
      <Blocknative /> */}
    </ButtonGroup>
  );
};

export default Web3Widget;
