import { ethers, network } from "hardhat";
import verify from '../utils/Verify'

async function main() {
  const Voting = await ethers.getContractFactory("Voting", {  libraries: { Hashing: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' } });
  const voting = await Voting.deploy('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');

  await voting.waitForDeployment();

  console.log(`Voting's smart contract deployed to : ${voting.target}`);

  if(network.name === 'goerli') {
    console.log('Verifying contract on Etherscan...');
    const tx = voting.deploymentTransaction();
    if (tx !== null) {
      await tx.wait(6);
    }
    const targetString = String(voting.target);
    await verify(targetString, ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266']);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
