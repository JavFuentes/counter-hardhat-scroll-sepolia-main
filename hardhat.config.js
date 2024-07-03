require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { SCROLL_SEPOLIA_RPC_URL, PRIVATE_KEY } = process.env;

console.log("SCROLL_SEPOLIA_RPC_URL:", SCROLL_SEPOLIA_RPC_URL);
console.log("PRIVATE_KEY:", PRIVATE_KEY);

module.exports = {
  solidity: "0.8.24",
  networks: {
    scrollSepolia: {
      url: SCROLL_SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
    },
  },
};
