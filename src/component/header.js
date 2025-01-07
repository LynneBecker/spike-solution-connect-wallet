import React from "react";
import ConnectButton from "./connectButton";

import styled from 'styled-components';
import useWalletConnect from "../hook/useWalletconnect";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  appkit-button {
    background: rgba(255, 255, 255, 0.15);
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

const NetworkStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4CAF50;
    display: inline-block;
  }
`;

const Header = ({ currentNetwork }) => {
    useWalletConnect();
    
    return (
        <HeaderContainer>
            <Logo>ReOwn</Logo>
            <NavSection>
                {currentNetwork && (
                    <NetworkStatus>
                        {currentNetwork.chainName}
                    </NetworkStatus>
                )}
                <ConnectButton />
            </NavSection>
        </HeaderContainer>
    );
}

export default Header;




