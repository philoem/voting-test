import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractTransactionResponse } from "ethers";
import { Eligibility } from '../typechain-types/Eligibility';

describe("Eligibility", () => {
  let myContract: Eligibility & { deploymentTransaction(): ContractTransactionResponse; };
  let admin: any;
  let eligibleVoter1: any;
  let eligibleVoter2: any;

  beforeEach(async () => {
    [admin, eligibleVoter1, eligibleVoter2] = await ethers.getSigners();

    const MyContract = await ethers.getContractFactory('Eligibility');
    myContract = await MyContract.deploy();
    await myContract.getDeployedCode();
  });

  it("should return list of eligible voters", async () => {
    const voters = await myContract.getVoters();
    expect(voters.length).to.equal(3); 
    expect(voters[0]).to.equal(admin.address);
    expect(voters[1]).to.equal(eligibleVoter1.address);
    expect(voters[2]).to.equal(eligibleVoter2.address);
  });
  
});
