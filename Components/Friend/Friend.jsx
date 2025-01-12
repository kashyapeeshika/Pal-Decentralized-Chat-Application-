/*This code defines a React component called Friend, which represents a UI component for displaying a list of friends and a chat interface. Here's a breakdown of the code:

Imports: The component imports React, the useState hook, the useContext hook, the Image component from Next.js for displaying images, CSS styles for styling, images from the assets folder, and other internal components (Card and Chat) required for rendering.

Friend Component: The Friend component is a functional component.

Context Usage:
It uses the useContext hook to access data and functions from the ChatAppContext.
It retrieves data such as friendLists, userName, loading, friendMsg, currentUserName, currentUserAddress, and functions like readMessage, sendMessage, and readUser.
 */
import React,{useState, useContext} from "react";
import Image from "next/image";
//Internal import 
import Style from "./Friend.module.css";
import images from "../../assets";
import Card from "./Card/Card";
import Chat from "./Chat/Chat";
import { ChatAppContext} from "../../Context/ChatAppContext";
import { ST } from "next/dist/shared/lib/utils";

const Friend = () => {
  //const array = [1, 2, 3, 4, 5, 6];
  const {readMessage,
    sendMessage,
    account,
    friendLists,
    userName,
    loading,
    readUser,
    friendMsg,
    currentUserName,
    currentUserAddress,} = useContext(ChatAppContext);

  return (
    <div className={Style.Friend}>
      <div className={Style.Friend_box}>
        <div className={Style.Friend_box_left}>
          {friendLists.map ((el, i) =>(
            <Card
              key= {i+1}
              el={el}
              i={i}
              readMessage={readMessage}
              readUser={readUser}
            />
          ))}
        </div>
        <div className={Style.Friend_box_right}>
          <Chat 
            functionName={sendMessage}
            readMessage={readMessage}
            friendMsg={friendMsg}
            account={account}
            userName={userName}
            loading={loading}
            currentUserName={currentUserName}
            currentUserAddress={currentUserAddress}
            readUser={readUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Friend;





