import React from 'react'

function ChildComponent2({ handleSubmit}) {
  return (
    <div style={{ backgroundColor: "yellow", margin: "10px", padding: "10px" }}>
      <h2>ChildComponent2</h2>
      <button onClick={() => handleSubmit("Option 2")}>Option 2</button>
    </div>
  );
}

export default ChildComponent2