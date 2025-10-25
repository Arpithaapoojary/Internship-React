import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import style from "./Button.module.css";

function Demo() {
  const [count, setCount] = useState(0);
  const increaseNumber = () => {
    setCount(count + 1);
  };

  const decreseNumber = () => {
    setCount(count - 1);
  };
  // const myStyle = {
  //   color: "white",
  //   backgroundColor: "red",

  // const [color, setColor] = useState("red");
  // const handleChange = () => {
  //   setColor("blue");
  // };

  return (
    <div className="demo">
      <div>{count}</div>
      <button onClick={increaseNumber}>Increment</button>
      <button onClick={decreseNumber}>Decrement</button>
      {/* <li>
        <Link to="/file1">File1</Link>
      </li> */}
    </div>
  );
}

export default Demo;
