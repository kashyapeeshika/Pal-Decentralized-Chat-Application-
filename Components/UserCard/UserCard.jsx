/*This code defines a UserCard component, which represents a card displaying information about a user. Here's a breakdown of the code:

Imports: The component imports React, the Image component from Next.js for displaying images, CSS styles for styling, and various internal assets.
Props: The component receives props el, i, and addFriends.
el: Object containing information about the user.
i: Index of the user card.
addFriends: Function to add a user as a friend.
*/
import React from "react";
import Image from "next/image";
//Internal import 
import Style from "./UserCard.module.css";
import images from "../../assets";

const UserCard = ({ el, i , addFriends}) => {
  console.log(el);
  return (
    <div>
      <div className={Style.UserCard}>
        <Image 
        className = {Style.User_box_img}
        src={images[index + 1]} alt="user" width={100} height={100} />

        <div className = { Style.UserCard_box_info}>
          <h3>{el.name}</h3>
          <p>{el.accountAddress.slice(0,25)}..</p>
          <button onclick = {() => addFriends({name: el.name, accountAddress: el.accountAddress})}></button>
          Add Friend
        </div>
      </div>

      <small className={Style.number}>{i + 1}</small>
    </div>
  );
};

export default UserCard;




