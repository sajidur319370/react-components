import React from "react";
import DeviceDetails from "../DeviceDetails/DeviceDetails";

const Device = (props) => {
  return (
    <div>
      <h1>I have:{props.name}</h1>
      <DeviceDetails price={props.price}></DeviceDetails>
    </div>
  );
};

export default Device;
