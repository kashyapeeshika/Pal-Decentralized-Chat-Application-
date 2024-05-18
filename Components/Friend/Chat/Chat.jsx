/*This code defines a React component called Chat, which represents a chat interface where users can send and receive messages. Here's a breakdown of the code:

Imports: The component imports React, the useEffect and useState hooks, the Image component from Next.js for displaying images, the useRouter hook from Next.js for accessing the router object, CSS styles for styling, images from the assets folder, the converTime function from apiFeature, and the Loader component from the index module.

Chat Component: The Chat component is a functional component that takes several props as input.

Props:
functionName: Function to send a message with optional file attachment.
readMessage: Function to read messages associated with a friend.
friendMsg: Array containing messages from the friend.
account: User's account address.
userName: User's name.
loading: Boolean indicating whether loading is in progress.
readUser: Function to read user information associated with the friend.
currentUserName: Name of the current user.
currentUserAddress: Address of the current user.

State:
message: State variable to store the message typed by the user.
chatData: State variable to store the data of the current chat session (friend's name and address).
selectedFile: State variable to store the selected file for attachment.

Effects:
The useRouter hook is used to access the router object. When the router is ready, it updates the chatData state with the query parameters from the router.
Upon component mount, if the chat data is available, it reads messages and user information associated with the friend.

Event Handlers:
handleFileSelect: Event handler function triggered when a file is selected. It sets the selected file in the state.
handleSend: Event handler function triggered when the user clicks the send button. It calls the functionName prop to send the message along with the selected file (if any), clears the message input field, and resets the selected file.

*/
import React,{ useEffect, useState} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
//Internal import 
import Style from "./Chat.module.css";
import images from "../../../assets";
import {converTime} from "../../../Utils/apiFeature";
import {Loader} from "../../index";
const Chat = ({functionName,
  readMessage,
  friendMsg,
  account,
  userName,
  loading,
  readUser,
  currentUserName,
  currentUserAddress}) => {

  //Use state 
  const [message , setMessage] = useState("");
  const [chatData, setChatData] = useState({name: "", address: "",});
  const router = useRouter();
  // New state for selected file
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(()=>{
    if(!router.isReady) return
    setChatData(router.query);
  }, [router.isReady]);

  useEffect(()=> {
    if(chatData.address) {
      readMessage(router.query.address);
      readUser(router.query.address);
    }
  },[]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSend = () => {
    // Call the function to send message with file
    functionName({ msg: message, address: chatData.address, file: selectedFile });
    // Clear message input and selected file
    setMessage("");
    setSelectedFile(null);
  };
  
  //console.log(chatData.address, chatData.name);

  return (
    <div className={Style.Chat}>
      {currentUserName && currentUserAddress ? (
        <div className={Style.Chat_user_info}> 
          <Image src={images.accountName}
            alt="image"
            width={70}
            height={70}
          />
          <div className={Style.Chat_user_info_box}>
            <h4>{currentUserName}</h4>
            <p className={Style.show}>{currentUserAddress}</p>
          </div>
        </div>
      ) :(
        ""
      )}
      <div className={Style.Chat_box_box}>
        <div className={Style.Chat_box}>
          <div className={Style.Chat_box_left}>
            {
              friendMsg.map((el, i ) =>(
                <div>
                  {el.sender == chatData.address ? (
                    <div className={Style.Chat_box_left_title}>
                      <Image src={images.accountName}
                        alt="image"
                        width={50}
                        height={50}
                      />
                      <span>
                        {chatData.name} {""}
                        <small>Time:{converTime(el.timestamp)}</small>
                      </span>
                    </div>
                  ):(
                    <div className={Style.Chat_box_left_title}>
                      <Image src={images.accountName}
                        alt="image"
                        width={50}
                        height={50}
                      />
                      <span>
                        {userName} {""}
                        <small>Time: {converTime(el.timestamp)}</small>
                      </span>
                    </div>
                  )}
                  <p key = {i+1}> {el.msg}
                  {""}
                  {""}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
            {currentUserName && currentUserAddress ? Chat(
              <div className={Style.Chat_box_send}>
                <div className={Style.Chat_box_send_img}>
                  <Image src={images.smile}
                    alt="smile"
                    height={50}
                    width={50}
                  />
                  <input
                    type="text"
                    placeholder="Type your message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {/*Define accepted file types*/}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf" 
                    onChange={handleFileSelect}
                  />
                  {
                    loading == true ? (
                      <Loader/>
                    ): (
                      <Image src={images.send}
                    alt="file"
                    height={50}
                    width={50}
                    onClick={handleSend}
                  />
                    )
                  }
                </div>
              </div>
            ):""}
      </div>
    </div>
  );
};

export default Chat;



