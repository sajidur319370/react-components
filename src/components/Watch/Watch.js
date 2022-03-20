import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const increaseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  };
  const deccreaseSteps = () => {
    const newSteps = steps - 1;
    setSteps(newSteps);
  };
  useEffect(() => {
    console.log(steps);
  }, [steps]);
  return (
    <div style={{ border: "4px solid tomato", margin: "20px" }}>
      <h2>This is my Watch</h2>
      <h3>my current steps: {steps}</h3>
      <button onClick={deccreaseSteps}>previous</button>
      <button onClick={increaseSteps}>Next</button>
      <Display name="garmin" steps={steps}></Display>
    </div>
  );
};

export default Watch;
