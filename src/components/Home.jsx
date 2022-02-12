import WalletBalance from './WalletBalance';
import NFTImage from './NFTImage';

import { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import FiredGuys from '../artifacts/contracts/MyNFT.sol/FiredGuys.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, FiredGuys.abi, signer);

function Home() {

  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  return (
    <div>
      <WalletBalance />
      <h1>DK NFT Collection</h1>
      <div>
        <div>
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <NFTImage tokenId={i} getCount={getCount} contract={ contract } />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;