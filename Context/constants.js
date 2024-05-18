/*This code snippet imports the JSON representation of the ChatApp contract ABI (Application Binary Interface) from a file named ChatApp.json. An ABI defines the interface for interacting with a smart contract on the Ethereum blockchain.

The contract address 0x5fbdb2315678afecb367f032d93f642f64180aa3 is assigned to the constant ChatAppAddress. This address represents the deployed instance of the ChatApp smart contract on the Ethereum blockchain.

The ABI of the ChatApp contract is extracted from the imported JSON object and assigned to the constant ChatAppABI. This ABI is necessary for interacting with the smart contract's functions and state variables from external applications or scripts, as it provides the required function signatures and data types.
 
*/
//0x5FbDB2315678afecb367f032d93F642f64180aa3
//0x5fbdb2315678afecb367f032d93f642f64180aa3
import chatAppJSON from "./ChatApp.json";

export const ChatAppAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export const ChatAppABI = chatAppJSON.abi;
