import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@primitivefi/hardhat-dodoc';
require('hardhat-storage-layout');

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  dodoc: {
    runOnCompile: true,
    debugMode: true,
    // More options...
  },
};

export default config;
