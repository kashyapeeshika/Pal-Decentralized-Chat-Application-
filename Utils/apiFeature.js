/*
This program includes utility functions for interacting with a blockchain-based chat application using Ethereum and MetaMask.
Functions:
- CheckIfWalletConnect: Checks if MetaMask is installed and returns the user's Ethereum account address.

- connectWallet: Requests user authentication and returns the user's Ethereum account address.

- fetchContract: Fetches the deployed contract instance using the provided signer or provider.

- connectingWithContract: Connects to MetaMask, retrieves the user's signer, and returns the contract instance.

- converTime: Converts a timestamp from a BigNumber to a human-readable date and time format.

Dependencies:
- ethers: Ethereum library for interacting with Ethereum nodes.

- Web3Modal: Library for connecting to various Ethereum wallets (e.g., MetaMask).

- ChatAppAddress: Address of the deployed chat application smart contract.

- ChatAppABI: ABI (Application Binary Interface) of the deployed chat application smart contract.

Note: Ensure that the dependencies are correctly installed and configured before using these functions.
*/

import {ethers} from "ethers";
import Web3Modal from "web3modal";

//Internal import 
import {ChatAppAddress, ChatAppABI} from "../Context/constants";

export const CheckIfWalletConnect = async () => {
    try {
        if (!window.ethereum) 
        return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }        
};

export const connectWallet = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }  
};

const fetchContract = (signerOrProvider) => new ethers.Contract(ChatAppAddress, ChatAppABI, signerOrProvider);

export const connectingWithContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        return contract;
    } catch (error) {
        console.log(error);
    }
}

export const converTime = (time) => {
    const newTime = new Date (time.toNumber());
    const realTime = newTime.getHours() + "/" +
    newTime.getMinutes() + "/" +
    newTime.getSeconds() + "Date:" +
    newTime.getDate() + "/" +
    (newTime.getMonth() + 1) + "/" +
    newTime.getFullYear();

    return realTime;
}
   


