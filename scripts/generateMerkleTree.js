const { addressWhitelisted } = require("../config/addresses-whiteListed");
const { MerkleTreeBuilder } = require("../modules/merkleTreeBuilder");
const { WhitelistGenerator } = require("../modules/whiteListGenerator");

async function main() {
  try {
    const merkleTreeBuilder = new MerkleTreeBuilder(addressWhitelisted);
    const merkleTree = merkleTreeBuilder.buildMerkleTree();

    const whitelistGenerator = new WhitelistGenerator(addressWhitelisted, merkleTree, "whiteList.json");
    const whitelistData = whitelistGenerator.generateWhitelistData();
    const data = whitelistGenerator.writeWhitelistFile(whitelistData);
    const root = merkleTreeBuilder.getRoot();
    console.log('root :>> ', root);

    !data ? console.log(`Error: data is ${data}`) 
     : console.log("Merkle tree and whitelist generated successfully."); return data;
    
  } catch (error) {
    console.error("Error:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });