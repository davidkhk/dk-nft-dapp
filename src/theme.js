import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme(
  {
    fonts: {
    heading: 'Futura LT Bold',
    body: 'FuturaLT',
    }
  },
  {
    config
  }
);

export default theme;