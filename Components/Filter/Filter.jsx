/*This code defines a React component called Filter, which represents a UI component for filtering and performing actions within a chat application. Here's a breakdown of the code:
Imports: The component imports React, the useState hook, the useContext hook, the Image component from Next.js for displaying images, CSS styles for styling, images from the assets folder, and the ChatAppContext from the application context. 

Filter Component: The Filter component is a functional component.

State Management:
It uses the useState hook to manage the state of addFriend, which is initially set to false.
 */
import React,{useState, useContext} from "react";
import Image from "next/image";
//Internal import 
import Style from "./Filter.module.css";
import images from "../../assets";
import {ChatAppContext} from "../../Context/ChatAppContext";
import {Model} from "../index";

const Filter = () => {
  const {account, addFriends} = useContext(ChatAppContext);
  //Use state
  const [addFriend, setaddFriend] = useState(false);
  return (
    <div className = {Style.Filter}>
      <div className = {Style.Filter_box}>
      <div className = {Style.Filter_box_left}>
        <div className = {Style.Filter_box_left_search}>
          <Image src={images.search} alt="image" width={20} height={20}/>
          <input type="text" placeholder="Search"/>
        </div>
      </div>
      <div className = {Style.Filter_box_right}>
        <button>
          <Image src={images.clear} alt="clear" width={20} height={20}/>
          Clear Chat 
        </button>
        <button onClick={() => setaddFriend(true)}>
          <Image src={images.user} alt="user" width={20} height={20}/>
          Add Friend 
        </button>
      </div>
      </div>
      {/* MODEL COMPONENT*/}
      {addFriend && (
          <div className ={Style.Filter_Model}>
            <Model openBox = {setaddFriend}
              title = "WELCOME TO"
              head = "PAL"
              info = "THIS DECENTRALIZED CHAT APPLICATION IS A REVOLUTIONARY APPROACH TO COMMUNICATION THAT LEVERAGES BLOCKCHAIN AND PEER-TO-PEER (P2P) TECHNOLOGY TO ENABLE SECURE, SNAPPY AND SECURE PRIVATE MESSAGING WITHOUT RELYING ON CENTRALIZED SERVERS."
              smallInfo= "Kindly Select Your Friend Name and Address.."
              image = {images.hero}
              functionName = {addFriends}
            />
          </div>
        )
      }
    </div>
  )

};

export default Filter;




