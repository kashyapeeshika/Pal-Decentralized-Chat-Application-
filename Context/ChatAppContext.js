/* State Variables:
- account: Stores the user's wallet account address.
userName: Stores the user's name. 

- friendLists: Stores the list of user's friends.

- friendMsg: Stores the messages from a selected friend.

- loading: Indicates whether data is currently being loaded.
- userLists: Stores the list of all users.

- error: Stores any error messages encountered during data fetching or processing.

- currentUserName: Stores the name of the currently selected user.

- currentUserAddress: Stores the address of the currently selected user.

Effects:
- useEffect: Fetches initial data when the component mounts using the fetchData function.

Functions:
- fetchData: Fetches user data, friend list, and all users from the smart contract upon component mount.

- readMessage: Reads messages from a selected friend.

- createAccount: Creates a new user account.

- addFriend: Adds a new friend to the user's friend list.

- sendMessage: Sends a message to a selected friend.

- readUser: Reads user details based on the provided user address.

Context Provider:
- Provides the defined state variables and functions as context values to its children components through ChatAppContext.Provider.

Context Value:
- Exposes state variables and functions as values of the context, making them accessible to consumer components.
*/
/*import React, { useState, useEffect, Children} from "react";
import { useRouter } from "next/router";
import {CheckIfWalletConnect,connectWallet,connectingWithContract} from "../Utils/apiFeature";
export const ChatAppContext = React.createContext();
export const ChatAppProvider = ({Children}) => {
  const title = "hey welcome to blockchain chat app.";

  return (
    <ChatAppContext.Provider value={title}>
      {Children}
    </ChatAppContext.Provider>
  )
};*/

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// Internal import
import {
  CheckIfWalletConnect,
  connectWallet,
  connectingWithContract
} from "../Utils/apiFeature";

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [userName, setUserName] = useState("");
  const [friendLists, setFriendLists] = useState([]);
  const [friendMsg, setFriendMsg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userLists, setUserLists] = useState([]);
  const [error, setError] = useState("");

  //Chat user data
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserAddress, setCurrentUserAddress] = useState("");
  const router = useRouter();
  
  //Fetch data time of page load
  const fetchData = async () => {
    try {
      const contract = await connectingWithContract();
      const connectAccount = await connectWallet();
      setAccount(connectAccount);
      const userName = await contract.getUsername(connectAccount);
      setUserName(userName);
      const friendLists = await contract.getMyFriendList();
      setFriendLists(friendLists);
      const userLists = await contract.getAllUsers();
      setUserLists(userLists);
    } catch (error) {
      //setError("Please install and connect your wallet");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Function to read message
  const readMessage = async (friendAddress) => {
    try {
      const contract = await connectingWithContract();
      const read = await contract.readMessage(friendAddress);
      setFriendMsg(read);
    } catch (error) {
      console.log("Currently you have no message.")
    }
  };

  //Function to create account
  const createAccount = async ({ name, accountAddress }) => {
    try {
      //if (name || accountAddress)
       // return
      //setError("Name and account address, cannot be empty.");
      const contract = await connectingWithContract();
      const getCreatedUser = await contract.createAccount(name);
      setLoading(true);
      await getCreatedUser.wait();
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError("Error while creating the account. Please reload the browser.")
    }
  };

  //Function to add friend
  const addFriend = async ({ name, accountAddress }) => {
    try {
      //if (name || accountAddress)
        //return setError("Please provide the data.");
      const contract = await connectingWithContract();
      const addMyFriend = await contract.addFriend(accountAddress, name);
      setLoading(true);
      await addMyFriend.wait();
      setLoading(false);
      router.push("/");
      window.location.reload();
    } catch (error) {
      setError("Something went wrong while adding friends, try again.");

    }
  };

  //Function to send message
  const sendMessage = async ({ msg, address }) => {
    try {
      // if (msg || address)
      //   return setError("Please type your message.");
      const contract = await connectingWithContract();
      const sendMessage = await contract.sendMessage(address, msg);
      setLoading(true);
      await sendMessage.wait();
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError("Please reload and try again.")
    }
  }

  //Function to read info of all users
  const readUser = async (userAddress) => {
    const contract = await connectingWithContract();
    const userName = await contract.getUsername(userAddress);
    setCurrentUserName(userName);
    setCurrentUserAddress(userAddress);
  }

  return (
    <ChatAppContext.Provider value={{
      readMessage,
      createAccount,
      addFriend,
      sendMessage,
      readUser,
      connectWallet,
      CheckIfWalletConnect,
      account,
      userName,
      friendLists,
      friendMsg,
      loading,
      userLists,
      error,
      currentUserName,
      currentUserAddress,
    }}>
      {children}
    </ChatAppContext.Provider>
  )
}
