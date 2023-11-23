// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract MerkleTreeProof {
  bytes32 public merkleRoot; 

  constructor(bytes32 _merkleRoot) {
    merkleRoot = _merkleRoot;
  }

  /**
   * @notice Verify if a proof is valid
   * @param proof The proof to be verified
   * @param leaf data hashed to be verified
  */
  function verify(bytes32[] memory proof, bytes32 leaf) public view returns (bool) {
    bytes32 computedHash = leaf; 
    for (uint256 i = 0; i < proof.length; i++) {
      bytes32 proofElement = proof[i];

      if (computedHash < proofElement) {
        computedHash = keccak256(abi.encodePacked(computedHash, proofElement));
      } else {
        computedHash = keccak256(abi.encodePacked(proofElement, computedHash));
      }
    }
    return computedHash == merkleRoot;
  }
}