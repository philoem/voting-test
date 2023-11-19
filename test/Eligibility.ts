import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractTransactionResponse } from "ethers";
import { Eligibility } from '../typechain-types/Eligibility';

describe("Eligibility", () => {
  let myContract: Eligibility & { deploymentTransaction(): ContractTransactionResponse; };
  let admin: any;
  let eligibleVoter1: any;

  beforeEach(async () => {
    [admin, eligibleVoter1] = await ethers.getSigners();

    const MyContract = await ethers.getContractFactory('Eligibility');
    myContract = await MyContract.deploy();
    await myContract.getDeployedCode();
  });

  it("should not allow non-admin to add eligible voters", async () => {
    await expect(myContract.connect(eligibleVoter1).addEligibleVoter(eligibleVoter1.address)).to.be.revertedWith(
      "Only admin can add eligible voters"
    );
  });
  
});
