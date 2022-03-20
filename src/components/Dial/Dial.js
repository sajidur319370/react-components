import React from "react";

const Dial = (props) => {
  return (
    <div style={{ border: "4px solid magenta", margin: "20px" }}>
      <h2>This is dial</h2>
      <h5>so far today: {props.steps}</h5>
    </div>
  );
};

export default Dial;
