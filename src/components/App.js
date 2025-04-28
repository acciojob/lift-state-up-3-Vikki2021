
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [option, setOption] = useState("");

  function handleSubmit(option) {
    // setOption(option);
    setOption(()=>option);
  }

  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h1>Parent component</h1>
      <ChildComponent1 handleSubmit={handleSubmit} />
      <ChildComponent2 handleSubmit={handleSubmit} />

      <div>Selected options : {option}</div>
    </div>
  );
}

export default App
