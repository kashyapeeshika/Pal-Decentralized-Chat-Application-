/*This code defines a React component called Model, which represents a modal or pop-up window for user interaction. Here's a breakdown of the code:

Imports: The component imports React, the Image component from Next.js for displaying images, CSS styles for styling, an image from the assets folder, and the ChatAppContext for accessing context data.

Model Component: The Model component is a functional component that takes several props:
openBox: A function to toggle the visibility of the modal.
title: The main title of the modal.
head: A subheading or additional information.
info: Detailed information displayed in the modal.
smallInfo: Small additional information.
image: An image displayed in the modal.
address: The user's address.
functionName: A function to be executed when a button is clicked in the modal.

State:
name: State variable to store the username input value.
accountAddress: State variable to store the account address input value.
loading: State variable obtained from the context to determine if loading is in progress.
*/
import React, {useContext, useState} from 'react';
import Image from 'next/image';
//Internal import 
import Style from "./Model.module.css";
import images from "../../assets";
import {ChatAppContext} from "../../Context/ChatAppContext";
import {Loader} from "../../Components/index";
const Model = ({
  openBox,
  title,
  head,
  info,
  smallInfo,
  image,
  address,
  functionName,
}) => {

  //Use state
  const [name, setName] = useState('');
  const [accountAddress, setAccountAddress] = useState("");
  const { loading } = useContext(ChatAppContext);

  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_left}>
          <Image src={image} alt="buddy" width={700} height={700} />
        </div>

        <div className={Style.Model_box_right}>
          <h1>
            {title}
            <span>{head}</span>
          </h1>
          <p>{info}</p>
          <small>{smallInfo}</small>

          {loading == true ? (
            <Loader />
          ) : (
            <div className={Style.Model_box_right_name}>
              <div className={Style.Model_box_right_name_info}>
                <Image src={images.username} alt="user" width={30} height={30} />
                <input type="text" placeholder="Enter Username" onChange={(e) => setName(e.target.value)} />
              </div>

              <div className={Style.Model_box_right_name_info}>
                <Image src={images.account} alt="user" width={30} height={30} />
                <input type="text" placeholder={address || "Enter Address.."} onChange={(e) => setAccountAddress(e.target.value)} />
              </div>

              <div className={Style.Model_box_right_name_btn}>
              <button onClick={() => functionName({name, accountAddress})}>
              {""}
                <Image src={images.send} alt="send" width={30} height={30} />
                {""}
                Submit
            </button>
            <button onClick={() => openBox(false)}>
            {""}
                <Image src={images.close} alt="close" width={30} height={30} />
                {""}
                Cancel
            </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Model;