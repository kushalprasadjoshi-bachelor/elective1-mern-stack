import React, { useState } from "react";

const LearnUseState = () => {
  // Make variable by using useState()
  let [name, setName] = useState("Nitan");
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>My name is {name}</p>

      <button
        onClick={() => {
          console.log("Button is clicked!");
        }}
      >
        Click Me!
      </button>

      <button
        onClick={() => {
          // name = 'Ram' --> Does nothing
          setName("Ram");
        }}
      >
        Change Name
      </button>

      <p>Count = {count}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default LearnUseState;
