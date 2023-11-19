// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "hardhat/console.sol";

contract Eligibility {

  uint256 public constant MAX_ELIGIBLE_VOTERS = 10;

  address[] public eligibleVoters;
  mapping(address => bool) public allowedAddresses;
  address public admin;

  constructor() {
    admin = msg.sender;
    
    eligibleVoters.push(address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266));
    allowedAddresses[address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266)] = true;

    eligibleVoters.push(address(0x70997970C51812dc3A010C7d01b50e0d17dc79C8));
    allowedAddresses[address(0x70997970C51812dc3A010C7d01b50e0d17dc79C8)] = true;

    eligibleVoters.push(address(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC));
    allowedAddresses[address(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC)] = true;  
    for(uint256 i = 0; i < eligibleVoters.length; i++) {
      console.log("eligibleVoters[i] => ", eligibleVoters[i]);
    }
  }

  function addEligibleVoter(address _voter) public returns(address){
    require(eligibleVoters.length < MAX_ELIGIBLE_VOTERS, "Maximum eligible voters reached");
    require(msg.sender == admin, "Only admin can add eligible voters");

    allowedAddresses[_voter] = true;
    eligibleVoters.push(_voter);
    return _voter;
  }

}