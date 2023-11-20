import { ethers } from "hardhat";

async function main() {
  const Voting = await ethers.getContractFactory("Voting", {  libraries: { Hashing: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' } });
  const voting = await Voting.deploy('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');

  await voting.waitForDeployment();

  console.log(`Voting deployed to ${voting.target}`);

  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.parseEther("0.001");

  // const lock = await ethers.deployContract("Lock", [unlockTime], {
  //   value: lockedAmount,
  // });

  // await lock.waitForDeployment();

  // console.log(
  //   `Lock with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
