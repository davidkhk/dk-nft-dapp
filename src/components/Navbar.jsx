import logo from '../logo.png';

import { Box, Flex, Avatar, Menu, MenuButton, MenuList, Center, Text } from '@chakra-ui/react';

const Navbar = () => {
  
  return (
    <>
      <Box bg='#ecfeff' px={4} width='100%' position="fixed">
        <Flex h={16} align='center' justify='space-between' >
          <Menu>
            <MenuButton
              rounded='full'
              variant='link'
              cursor='pointer'
              minW={0}>
              <Avatar
                size='sm'
                src={logo}
              />
            </MenuButton>
            <MenuList alignItems='center'>
              <br />
              <Center>
                <Avatar
                  size='2xl'
                  src={logo}
                />
              </Center>
              <br />
              <Center>
              <Text bgGradient='linear(to-l, #30834b, #203b32)' bgClip='text' fontSize='md' >
                DK NFT Collection
              </Text >
              </Center>
              <br />
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;