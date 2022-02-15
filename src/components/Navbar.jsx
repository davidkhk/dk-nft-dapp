import logo from '../logo.png';

import { Box, Flex, Avatar, Button, Menu, MenuButton, MenuList, useColorModeValue, Stack, useColorMode, Center, } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <>
      <Box bg={useColorModeValue('#ecfeff', '#285E61')} px={4} width='100%' position="fixed">
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
                    <p>DK NFT Collection</p>
                  </Center>
                  <br />
                </MenuList>
              </Menu>

          <Flex align='center'>
            <Stack direction='row' spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;