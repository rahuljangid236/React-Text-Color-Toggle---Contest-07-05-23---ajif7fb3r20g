import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  //code here
  const [statusColor, setColor] = useState("redColor");
  const clicked = () => {
    if (statusColor === "redColor") {
      setColor("blueColor");
    } else {
      setColor("redColor");
    }
  };
  return (
    <div id="main">
      <p className={statusColor}>Newton School</p>
      <button id="button" onClick={clicked}>
        Change Style
      </button>
    </div>
  );
};

export default App;
