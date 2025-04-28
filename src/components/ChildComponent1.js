import React from 'react'

function ChildComponent1({handleSubmit}) {

  return (
    <div style={{ backgroundColor: "orange", margin: "10px", padding: "10px" }}>
      <h2>ChildComponent1</h2>
      <button onClick={() => handleSubmit("option 1")}> option 1</button>
    </div>
  );
}

export default ChildComponent1