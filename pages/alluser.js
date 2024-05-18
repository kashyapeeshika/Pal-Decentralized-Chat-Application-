/*This code represents a React component named alluser, likely corresponding to a page in a Next.js application. Let's break down what each part does:

Imports:
React: The react module is imported to define React components.
Internal imports from the project's components and styles are included.

Functional Component - alluser: This is a functional component named alluser. It renders a list of users with the option to add them as friends.

Context Usage:
The useContext hook is used to consume the ChatAppContext context, which likely provides data and functions related to the chat application.
Destructuring is used to extract specific values (userLists and addFriends) from the context.

Rendering:
The component renders a header with the title "Find Your Friends" inside a div with class alluser_info.
Inside another div with class alluser, it maps over the userLists array to render a UseCard component for each user. The addFriends function is passed down to each UseCard component as a prop.

Export: The alluser component is exported as the default export of the file, allowing it to be imported and used in other parts of the application.
*/
import React, {useState, useEffect, useContext} from "react";
//Internal import 
import {UseCard} from "../Components/index";
import Style from "../styles/alluser.module.css";
import { ChatAppContext } from "../Context/ChatAppContext";
import { ST } from "next/dist/shared/lib/utils";
const alluser = () => {
  const { userLists, addFriends } = useContext(ChatAppContext);
  return (
    <div>
      <div className={Style.alluser_info}>
        <h1>Find Your Friends</h1>
      </div>
      <div className = {Style.alluser}>
      {userLists.map((el, i) => (
          <UseCard key={i + 1} user={el} i={i} addFriends={addFriends} />
        ))}
      </div>
    </div>
  )
};

export default alluser;
