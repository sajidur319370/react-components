import React from "react";
import Dial from "../Dial/Dial";

const Display = (props) => {
  return (
    <div style={{ border: "4px solid cyan", margin: "10px" }}>
      <h3>Name:{props.name}</h3>
      <h4>Quantity: {props.steps}</h4>
      <Dial steps={props.steps}></Dial>
    </div>
  );
};

export default Display;
