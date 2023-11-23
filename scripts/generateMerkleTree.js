const { addressWhitelisted } = require("../config/addresses-whiteListed");
const { MerkleTreeBuilder } = require("../modules/merkleTreeBuilder");
const { WhitelistGenerator } = require("../modules/whiteListGenerator");

async function main() {
  try {
    const merkleTreeBuilder = new MerkleTreeBuilder(addressWhitelisted);
    const merkleTree = merkleTreeBuilder.buildMerkleTree();

    const whitelistGenerator = new WhitelistGenerator(addressWhitelisted, merkleTree, "whiteList.json");
    const whitelistData = whitelistGenerator.generateWhitelistData();
    whitelistGenerator.writeWhitelistFile(whitelistData);

    console.log("Merkle tree and whitelist generated successfully.");
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