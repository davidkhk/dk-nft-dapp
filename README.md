# Mint a beautiful photograph NFT
(photographs taken by me! :wink::camera::earth_americas:)

Whether the future, a scam, or both, web 3.0 can't be ignored. It is generally referred to descentralized webapps that uses ethereum smart contracts to replace traditional web servers, and this is a personal project that demonstrates all of that. Here I built a smart contract that can be accessed on the web using Ethers.js and React.js. The app allows you to mint beautiful NFTs (non-fungible tokens) when transferring Ether via your MetaMask wallet. The idea was to access the API of a smart contract from a frontend web app.

## What I learned:
- How to upload art to IPFS using Pinata
- How to use HardHat to perform tests, check code for mistakes, and interact with the smart contract
- How to use OpenZeppelin to generate the initial boiler plate for the ERC-721 smart contract code
- How to build a frontend that:
  - Checks whether MetaMask is installed, prompting the user to install it if not
  - Gets the wallet balance using ethers.js
  - Requests the number of minted NFTs and creates a loop to render a child component for each one
  - Mints a new token when clicking the "Mint token" button using the payToMint method defined in the Solidity code
