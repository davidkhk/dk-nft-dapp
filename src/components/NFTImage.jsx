import { useState, useEffect } from 'react';

import { ethers } from 'ethers';

function NFTImage({ tokenId, getCount, contract }) {
    const contentId = 'Qmdbpbpy7fA99UkgusTiLhMWzyd3aETeCFrz7NpYaNi6zY';
    const metadataURI = `${contentId}/${tokenId}.json`;
    const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.jpg`;
    // const imageURI = `img/${tokenId}.png`;
  
    const [isMinted, setIsMinted] = useState(false);
    useEffect(() => {
      getMintedStatus();
    }, [isMinted]);
  
    const getMintedStatus = async () => {
      const result = await contract.isContentOwned(metadataURI);
      console.log(result)
      setIsMinted(result);
    };
  
    const mintToken = async () => {
      const connection = contract.connect(signer);
      const addr = connection.address;
      const result = await contract.payToMint(addr, metadataURI, {
        value: ethers.utils.parseEther('0.05'),
      });
  
      await result.wait();
      getMintedStatus();
      getCount();
    };
  
    async function getURI() {
      const uri = await contract.tokenURI(tokenId);
      alert(uri);
    }
    
    return (
      <div style={{ width: '18rem' }}>
        <img src={isMinted ? imageURI : '../assets/placeholder.png'}></img>
        <div>
          <h5>ID #{tokenId}</h5>
          {!isMinted ? (
            <button onClick={mintToken}>
              Mint
            </button>
          ) : (
            <button onClick={getURI}>
              Taken! Show URI
            </button>
          )}
        </div>
      </div>
    );
  }

  export default NFTImage;