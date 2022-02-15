import { useEffect, useState } from 'react';

import WalletBalance from './WalletBalance';
import NFTImage from './NFTImage';

import { Icon, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import  { SiEthereum } from 'react-icons/si';

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
      <Flex direction='column' bg={useColorModeValue('#ecfeff', '#285E61')} >
        <Flex width='full' direction='row' align='flex-start' justify='space-evenly' py='10%' >
          <Text bgGradient='linear(to-l, #203b32, #30834b)' bgClip='text' fontSize='6xl' fontWeight='extrabold' >
            Welcome to my<br /> NFT gallery
          </Text>

          <Flex border='1px' borderColor='teal' boxShadow='dark-lg' p={3} direction='column' justify='flex-end' align='flex-start' rounded='xl' height={40} width={['100%', '50%', '25%', '15%' ]} my={5}>
            <Flex justify='space-between' direction='column' width='100%' height='100%'>
              <Flex justify='space-between' align='flex-start'>
                  <Flex width={10} height={10} rounded='100%' border='1px' borderColor='teal' justify='center' align='center'>
                      <Icon as={SiEthereum} fontSize={21} color="teal" />
                  </Flex>
              </Flex>
              <WalletBalance />
            </Flex>
          </Flex>
        </Flex>

        <div>
          {Array(totalMinted + 1)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <NFTImage tokenId={i} getCount={getCount} contract={contract} />
              </div>
            ))}
        </div>
      </Flex>
  );
}

export default Home;