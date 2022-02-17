import { useState, useEffect } from 'react';
import { Button, Box, Center, useColorModeValue, Text, Stack, Image, } from '@chakra-ui/react'

import { ethers } from 'ethers';

const NFTImage = ({ tokenId, getCount, contract }) => {
    const contentId = 'Qmdbpbpy7fA99UkgusTiLhMWzyd3aETeCFrz7NpYaNi6zY';
    const metadataURI = `${contentId}/${tokenId}.json`;
    const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.jpg`;
  
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
      <Center py={12}>
        <Box
          role='group'
          p={6}
          maxW='330px'
          w='full'
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow='2xl'
          rounded='lg'
          pos='relative'
          zIndex={1}>
          <Box
            rounded='lg'
            mt={-12}
            pos='relative'
            height='230px'
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              background: `url(${isMinted ? imageURI : '../assets/placeholder.jpg'})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded='lg'
              height={230}
              width={282}
              objectFit='cover'
              src={isMinted ? imageURI : '../assets/placeholder.jpg'}
            />
          </Box>
          <Stack pt={10} align='center'>
            <Text color='gray.600'>
              ETH 0.0005
            </Text>
            <Text color='gray.500' fontSize='sm' textTransform='uppercase'>
              ID #{tokenId}
            </Text>
            {!isMinted ? (
              <Button colorScheme='teal' size='sm' onClick={mintToken}>
                Mint
              </Button>
            ) : (
              <Button colorScheme='teal' size='sm' onClick={getURI}>
                Taken! Show URI
              </Button>
            )}
          </Stack>
        </Box>
      </Center>
    );
  }

  export default NFTImage;