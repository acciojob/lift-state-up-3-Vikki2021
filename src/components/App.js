
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  function handleSubmit(option) {
    setSelectedOption(() => option);
  }

  return (
    <div
      className="parent"
      style={{
        backgroundColor: "lightgreen",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h1>Parent Component</h1>
      <ChildComponent1 handleSubmit={handleSubmit} />
      <ChildComponent2 handleSubmit={handleSubmit} />

      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default App
