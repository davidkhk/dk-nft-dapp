import { useState } from 'react';
import { ethers } from 'ethers';

import { Box, Button } from '@chakra-ui/react';

function WalletBalance() {
    const [balance, setBalance] = useState();

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };

    return (
      <Box p={2} color='#219F94' >
        <h5>Your Balance, ETH: {balance}</h5>
        {!balance && (
          <Button colorScheme='teal' size='sm' onClick={() => getBalance()}>Show my balance</Button>
        )}
      </Box>
    );
  };

  export default WalletBalance;