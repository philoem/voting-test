import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractTransactionResponse } from "ethers";
import { Hashing } from '../typechain-types/Hashing';

describe("Hashing", () => {
  let myContract: Hashing & { deploymentTransaction(): ContractTransactionResponse; };

  beforeEach(async () => {
    const MyContract = await ethers.getContractFactory('Hashing');
    myContract = await MyContract.deploy();
    await myContract.getDeployedCode();
  });

  it("hashing with stringToUint method", async () => {
    let stringToUint = await myContract.stringToUint('hello');
    expect(stringToUint).to.equal(42150041695590488785225739803509127081131869283281122538872007547751156200123n);
  });
  
});
