//Error Component: The Error component is a functional component that receives a prop called error, which represents the error message to be displayed.
import React from "react";
//Internal import 
import Style from "./Error.module.css";

const Error = ({error}) => {
  return (
    <div className = {Style.Error}>
      <div className = {Style.Error_box}>
        <h1>Please Fix These Error And Reload The Browser</h1>
        {error}
      </div>
    </div>
  );
};

export default Error;


