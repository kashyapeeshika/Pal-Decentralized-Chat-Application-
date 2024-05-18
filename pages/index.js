/*This code defines a React functional component named ChatApp. Let's break down what it does:

Imports:
React: The react module is imported to define React components.
Internal imports are made for the ChatAppContext, Filter, and Friend components from their respective locations.

Functional Component - ChatApp:
This component serves as the main entry point for the chat application.
It renders two components: Filter and Friend, wrapped inside a <div> element.
It consumes the ChatAppContext using the useContext hook. However, the destructuring assignment from the context is empty ({}), indicating that the component is not currently utilizing any data or functions from the context. This could be a placeholder for future additions to the component's functionality.

Export:
The ChatApp component is exported as the default export of the file, allowing it to be imported and used in other parts of the application.
*/
import React, { useEffect, useState, useContext } from "react";
//Internal import 
import {ChatAppContext} from "../Context/ChatAppContext";
import {Filter, Friend} from "../Components/index";
const ChatApp = () =>{
  const {} = useContext(ChatAppContext);
  return <div>
    <Filter/>
    <Friend/>
  </div>
};

export default ChatApp;
