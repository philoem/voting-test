// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import { Hashing } from './Library/HashingLibrary.sol';
import './MerkleTreeProof.sol';

contract Voting {
  
  MerkleTreeProof merkleTreeProofInstance;

  struct Voter {
    bool voted;
    uint vote;
    bool committed;
    bytes32 encryptedVote;
  }

  mapping(address => Voter) public voters;
  mapping(uint256 => uint256) public voteCount;
  mapping(address => bytes32) public commitHashes;
  
  constructor(address _merkleTreeProofInstance) {
    merkleTreeProofInstance = MerkleTreeProof(_merkleTreeProofInstance);
  }

  function commitVote(bytes32 _commitHash) internal {
    require(!voters[msg.sender].committed, "Vote has already been committed");

    commitHashes[msg.sender] = _commitHash;
    voters[msg.sender].committed = true;
  }

  function vote(string calldata _candidate) public returns(uint256) {
    bytes32 addressBytes = keccak256(abi.encodePacked(msg.sender));
    require(merkleTreeProofInstance.merkleRoot() == addressBytes, "Invalid merkle root");
    require(!voters[msg.sender].voted, "Voter has already voted");

    // Commit-reveal system
    require(voters[msg.sender].committed);
    bytes32 commitHash = keccak256(abi.encodePacked(_candidate, Hashing.generatedSaltToCommitHash()));
    commitVote(commitHash);
    require(commitHashes[msg.sender] == commitHash, "Invalid commit hash");

    uint uintegerString = Hashing.stringToUint(_candidate);
    
    voters[msg.sender].voted = true;
    voters[msg.sender].vote = uintegerString;
    
    return voteCount[uintegerString] += 1;
  }

}