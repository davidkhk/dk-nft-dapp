import Navbar from './components/Navbar';
import Home from './components/Home';
import Install from './components/Install';

import { ChakraProvider } from '@chakra-ui/react'
import Fonts from './components/Fonts.jsx'
import theme from './theme.js'
import breakpoints from './components/Breakpoints.jsx'

function App() {
  if (window.ethereum) {
    return (
      <>
        <ChakraProvider theme={theme} breakpoints={breakpoints}>
        <Fonts />
          <Navbar />
          <Home />
        </ChakraProvider>
      </>
    )} else {
    return <Install />
  }
}

export default App;