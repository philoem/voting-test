import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('hardhat-storage-layout');

const config: HardhatUserConfig = {
  solidity: "0.8.20",
};

export default config;
