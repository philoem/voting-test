import { ethers } from "hardhat";
const contract = require('../artifacts/contracts/Voting.sol/Voting.json');

console.log(JSON.stringify(contract.abi));

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;

const { ethereum } = window
ethereum.request({ method: 'eth_requestAccounts' });

const provider = new ethers.BrowserProvider(ethereum);

const signer = provider.getSigner();

const abi = contract.abi;

const smartContract = new ethers.Contract(contract.address, abi, signer);

const vote = async () => await smartContract.vote();

// const provider = new ethers.provider.JsonRpcProvider(network = "goerli", API_KEY);
// const signer = new ethers.Wallet(PRIVATE_KEY, provider);
// const greetingMessagesContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

// async function main() {
//   // const message = await greetingMessagesContract.message();
//   // console.log("The message is: ", message);

//   // console.log("Updating the message...");
//   // const tx = await greetingMessagesContract.update("Hola y bienvenido");
//   // await tx.wait();

//   // const newMessage = await greetingMessagesContract.message();
//   // console.log("The new message is: ", newMessage);
// }
// main();

