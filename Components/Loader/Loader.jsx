/*This code defines a React component called Loader, which represents a loading spinner or indicator. Here's a breakdown of the code:

Imports: The component imports React, the Image component from Next.js for displaying images, CSS styles for styling, and an image from the assets folder.

Loader Component: The Loader component is a functional component that doesn't take any props as input.
*/
import React from "react";
import Image from "next/image";
//Internal import 
import Style from "./Loader.module.css";
import images from "../../assets";
const Loader = () => {
  return (
    <div className = {Style.Loader}>
      <div className = {Style.Loader_box}>
        <Image src={images.loader} alt="loader" width={100} height={100}/>
      </div>
    </div>
  )
};

export default Loader;


