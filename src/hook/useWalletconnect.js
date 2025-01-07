import React, { useState, useEffect } from 'react';
import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { arbitrum, mainnet, polygon, arbitrumSepolia, sepolia, baseSepolia, base } from '@reown/appkit/networks'
import Header from '../component/header';

// 1. Get projectId
const projectId = '450039cb3e1a18313a3e6b4144c8b7cb';

// 2. Set the networks

const networks = [arbitrum, mainnet, polygon, arbitrumSepolia, sepolia, baseSepolia, base];
// 3. Create a metadata object - optional
const metadata = {
  name: 'connectWallet',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default function useWalletConnect() {

  const [currentNetwork, setCurrentNetwork] = useState(null);

  useEffect(() => {
    // Function to handle network changes
    const handleChainChanged = (chainId) => {
      const network = networks.find(net => net.chainId === chainId);
      if (network) {
        setCurrentNetwork(network);
        // Additional logic to re-initialize or update Web3Modal can go here
        console.log(`Switched to network: ${network.chainName}`);
      } else {
        console.warn(`Unsupported network: ${chainId}`);
      }
    };

    // Add event listener for network changes
    window.ethereum.on('chainChanged', handleChainChanged);

    // Clean up the event listener on component unmount
    return () => {
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    };
  }, []);

  useEffect(() => {
    // Initialize Web3Modal and other setup logic here
    const projectId = 'YOUR_PROJECT_ID';
    createAppKit({
      adapters: [new EthersAdapter()],
      networks,
      projectId,
      // Additional configuration
    });
  }, []);


  return <Header currentNetwork = {currentNetwork} /> // Configure the <w3m-button> or a similar button inside
}