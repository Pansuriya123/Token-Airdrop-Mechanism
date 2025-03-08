// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.28",
// };



require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    hedera: {
      url: process.env.HEDERA_RPC_URL, // Use Thirdweb's RPC if Hashio is down
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

