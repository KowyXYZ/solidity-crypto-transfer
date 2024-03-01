// https://eth-sepolia.g.alchemy.com/v2/ZuUVpo548kLNbqfT_bPmZVaPi94aCJQ6

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/ZuUVpo548kLNbqfT_bPmZVaPi94aCJQ6',
      accounts: [ '09f233e9ea3e099ff2f7db7c2e6a3fb2a71914669b852d03ff2859551f854c44' ]
    }
  }
}