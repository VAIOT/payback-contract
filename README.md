<div align="center">
    <img src="assets/vaiotLogo.svg" alt="VAIOT Logo" width="400"/>
</div>

</br>
</br>

# Payback Staking Smart Contract

Welcome to the official repository for the Payback Staking Smart Contract utilized in the VAIOT's Payback program. This repository houses the development and maintenance of the staking contract designed for Ethereum-based tokens, utilizing the solidity programming language and the Hardhat development environment.

## Installation

To get started with the Payback Staking Contract:

```bash
git clone https://github.com/VAIOT/payback-contract.git
cd payback-contract
npm install
```

## Configuration

To properly configure the project, create a .env file in the root directory and include the following required variables:

```bash
MUMBAI_RPC_URL= # RPC URL for the Mumbai testnet
GOERLI_RPC_URL= # RPC URL for the Goerli testnet
PRIVATE_KEY= # Private key for contract deployment
COINMARKETCAP_API_KEY= # CoinMarketCap API key
POLYGONSCAN_API_KEY= # PolygonScan API key
REPORT_GAS= # true or false
ETHERSCAN_API_KEY= # Etherscan API key

```

## Smart Contract Overview

The PaybackStaking contract allows for the staking of ERC20 tokens, with unique features:

<ul>
    <li>Staking initiated only by the owner, offering controlled participation.</li>
    <li>Non-reentrant for secure user withdrawal transactions.</li>
    <li>Fixed APY for predictable reward calculations.</li>
    <li>Handling of inactive accounts with an inactivity limit.</li>
</ul>

For full functionality and method descriptions, refer to the source code.

## Deployment

Deploy the smart contract either locally or on a testnet using the Hardhat tool.

### Local Deployment

```bash
npx hardhat deploy
```

### Mumbai Testnet Deployment

```bash
npx hardhat deploy --network mumbai
```

## Testing

Run the unit tests to ensure code reliability:

```bash
npx hardhat test
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
