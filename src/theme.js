import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme(
  {
    fonts: {
    heading: 'Futura LT Bold',
    body: 'FuturaLT',
    }
  },
  {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
);

export default theme;