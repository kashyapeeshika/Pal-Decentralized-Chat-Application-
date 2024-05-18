/*This is a JavaScript script using the Hardhat framework for Ethereum development. Let's break down what it does:

Imports:
hre: The script imports the Hardhat framework using require.

Main Function (main):
It's an asynchronous function (async main()) that serves as the entry point for the script.
Inside the main function:
It uses hre.ethers.getContractFactory() to get the factory of the ChatApp contract.
It deploys the contract using ChatApp.deploy().
It waits for the contract to be deployed and assigns the deployed instance to the variable chatApp.
Finally, it logs the contract address to the console.

Error Handling:
The main function is wrapped in a try-catch block to handle any errors that might occur during deployment.
If an error occurs, it is logged to the console, and the process exits with a non-zero exit code (process.exitCode = 1).

Execution:
The main function is called using main().catch(), which starts the execution of the script.
If any error occurs during execution, it is caught by the catch block and logged to the console.
*/
const hre = require("hardhat");

async function main() {
  const ChatApp = await hre.ethers.getContractFactory("ChatApp");
  const chatApp = await ChatApp.deploy();

  await chatApp.deployed();

  console.log(` Contract Address: ${chatApp.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
