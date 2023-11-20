import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractTransactionResponse } from "ethers";
import { Voting } from '../typechain-types/Voting';
import { Eligibility } from "../typechain-types/Eligibility";
// import { Hashing } from "../typechain-types/Hashing";

describe("Voting", () => {
  let voting: Voting & { deploymentTransaction(): ContractTransactionResponse; };
  // let eligibility: Eligibility & { deploymentTransaction(): ContractTransactionResponse; };
  // let hashing: Hashing & { deploymentTransaction(): ContractTransactionResponse; };
  let admin: any;
  let voter1: any;
  let eligibilityInstance: Eligibility;

  describe("vote test", async () => {
    beforeEach(async () => {
      const Voting = await ethers.getContractFactory("Voting", {  libraries: { Hashing: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' } });
      const Eligibility = await ethers.getContractFactory("Eligibility");
      console.log('Voting :>> ', Voting);

      eligibilityInstance = await Eligibility.deploy();
      voting = await Voting.deploy('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');

      [admin, voter1] = await ethers.getSigners();
    });

    it("should deploy the contracts correctly", async () => {
      expect(await voting.getDeployedCode()); 
      expect(await eligibilityInstance.getDeployedCode());
    });

    it('should ', async () => {
      // console.log('voter.voted :>> ', (await voting.voters(voter1)).voted);
      // Associer le contrat Eligibility au contrat Voting
      // await voting.connect(await ethers.provider.getSigner());

      // Adresse de l'électeur
      const voterAddress = voter1.address;

      // Effectuer le vote
      // const voteTransaction = await voting.connect(voterAddress).vote("<nom_du_candidat>");
      const voteTransaction = ethers.provider;
      console.log('voteTransaction :>> ', voteTransaction);

      // // Attendre la confirmation de la transaction
      // await voteTransaction.wait();

      // // Vérifier que l'électeur a bien voté
      // const voter = await voting.voters(voterAddress);      
      // expect(voter.voted).to.be.true;
      // expect(voter.vote).to.be.a("bigint");
    })
    
  });
  
});
