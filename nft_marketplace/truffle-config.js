 //const HDWalletProvider = require('@truffle/hdwallet-provider');
 //const infuraKey = "";

 //const fs = require('fs');
 //const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  
  networks: {
    
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    
     rinkeby: {
     provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/YOUR-PROJECT-ID`),
     network_id: 4,       // rinkeby's id
     gas: 5500000,        // rinkeby has a lower block limit than mainnet
     confirmations: 2,    // # of confs to wait between deployments. (default: 0)
     timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
     skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },
    
    // Useful for private networks
     private: {
     provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
     network_id: 2111,   // This network is yours, in the cloud.
     production: true    // Treats this network as if it was a public net. (default: false)
     }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
     version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
     settings: {
          optimizer : {
           enabled :true,
           runs:200
          }
        }
    },
  },
};
