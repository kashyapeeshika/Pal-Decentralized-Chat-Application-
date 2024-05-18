/*This code defines a React component called Card, which represents a UI component for displaying individual friend cards. Here's a breakdown of the code:

Imports: The component imports React, the useEffect hook, the Image component from Next.js for displaying images, the Link component from Next.js for client-side navigation, CSS styles for styling, and images from the assets folder.

Card Component: The Card component is a functional component that takes props as input.

Props:
el: Represents an individual friend object containing information such as name and pubkey.
i: Represents the index of the friend in the list.
readMessage: Function to read messages associated with the friend.
readUser: Function to read user information associated with the friend.

Event Handling:
When the card is clicked, it invokes the onClick event handler, which calls the readMessage and readUser functions, passing the friend's pubkey as an argument.
This allows for reading messages and user information associated with the clicked friend.
*/
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
//Internal import 
import Style from "./Card.module.css";
import images from "../../../assets";

const Card = ({el,
  i,
  readMessage,
  readUser}) => {
    console.log(el)
  return (
    <Link
    href={{pathname: "/",
    query: {name:'${el.name}',
    address: '${el.pubkey}'},
    }}>
      <div className={Style.Card}
      onClick={() => (readMessage(el.pubkey), readUser(el.pubkey))}>
        <div className={Style.Card_box}>
          <div className={Style.Card_box_left}>
            <Image src={images.accountName}
              alt="accountName"
              width={50}
              height={50}
              className={Style.Card_box_left_img}
            />
          </div>
          <div className={Style.Card_box_right}>
            <div className={Style.Card_box_right_middle}>
              <h4>{el.name}</h4>
              <small>{el.pubkey.slice(21)}...</small>
            </div>
            <div className={Style.Card_box_right_end}>
              <small>{i+1}</small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;


