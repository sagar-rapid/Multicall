require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
const dotenv = require('dotenv');
dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

// task("verify_contract","verifying all contract",async(taskArgs,hre) =>{
//     await hre.run("verify:verify", {
//         address: "0xF8731F8Cb63c2A4BBfEDB49e6B0862d42e3D11B2",
//         constructorArguments: [],
//         });
// })

task("verify_contract","verifying all contract",async(taskArgs,hre) =>{
  await hre.run("verify:verify", {
      address: "0x70624b5F28d2E41A7b7bA30E91B76460e759D423",
      constructorArguments: ["Hritik Roshan", "HR", "https://mobiapi.owens.market/uri/"],
      });
})

module.exports = {
    networks: {
    	testnet: {
      		url: "https://matic-testnet-archive-rpc.bwarelabs.com",
      		chainId: 80001,
      		accounts: [process.env.DEPLOYER_PRIVATE_KEY]
    	},
    	mainnet: {
      		url: "https://bsc-dataseed.binance.org/",
      		chainId: 56,
      		accounts: [process.env.DEPLOYER_PRIVATE_KEY]
    	},
    	localhost: {
      		url: "http://127.0.0.1:8545"
    	},
        bsc: {
            url: process.env.MAIN_NET_API_URL,
            accounts: [process.env.DEPLOYER_PRIVATE_KEY],
        },
        fork: {
            url: 'http://localhost:8545',
        },
        hardhat: {
            forking: {
                url: process.env.MAIN_NET_API_URL,
            }
        },
    },
    etherscan: {
        apiKey: process.env.BSCSCAN_API_KEY,
    },
    solidity: {
        version: "0.8.11",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};