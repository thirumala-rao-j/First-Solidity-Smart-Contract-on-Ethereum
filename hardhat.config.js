require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/wJQRy69YnWen2CZcB7T8TFMNSyg2574j",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
