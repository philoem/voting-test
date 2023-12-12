import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractTransactionResponse } from "ethers";
import { Voting } from '../typechain-types/Voting';
// import { Hashing } from "../typechain-types/Hashing";

describe("Voting", () => {
  let voting: Voting & { deploymentTransaction(): ContractTransactionResponse; };
  // let hashing: Hashing & { deploymentTransaction(): ContractTransactionResponse; };
  let admin: any;
  let voter1: any;
  let merkleTreeRoot = '0xe0e12db933f1913125b6098f7ba2ba47cb7a98dc321a4929712f93259a199491';
  let proof = [
    "0x00314e565e0574cb412563df634608d76f5c59d9f817e85966100ec1d48005c0",
    "0x35729a9e780175a3aa15f48d89cd15271e4c91b09c58d76595047a6570947f18"
  ];
  let leaf = '0x978cc91d914c8ab8b2703515a2b31a631baf8f97ec7fada3a16966332fe9e35f';

  describe("vote test", async () => {
    beforeEach(async () => {
      const Voting = await ethers.getContractFactory("Voting", {  libraries: { Hashing: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' } });
      voting = await Voting.deploy(merkleTreeRoot, proof, leaf);

      [admin, voter1] = await ethers.getSigners();
    });

    it("should deploy the contracts correctly", async () => {
      expect(await voting.getDeployedCode()); 
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
      // console.log('voteTransaction :>> ', voteTransaction);

      // // Attendre la confirmation de la transaction
      // await voteTransaction.wait();

      // // Vérifier que l'électeur a bien voté
      // const voter = await voting.voters(voterAddress);      
      // expect(voter.voted).to.be.true;
      // expect(voter.vote).to.be.a("bigint");
    })
    
  });
  
});
