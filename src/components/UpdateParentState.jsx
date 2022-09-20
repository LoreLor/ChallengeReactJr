import React, { useState } from "react";

const Child = ({ setValue }) => {
  const handleCLick = () => {
    setValue("Parent has been update!!!");
  };

  return (
    <div>
      <h2>Child</h2>
      <button onClick={handleCLick} className="btn btn-dark">
        Change Parent Value
      </button>
    </div>
  );
};

const UpdateParentState = () => {
  const [value, setValue] = useState("I need to be update from child");

  return (
    <>
      <h3>Update Parent</h3>
      <div
        className="box"
        style={{ padding: 10, border: "red", marginBottom: 10 }}
      >
        {value}
      </div>
      <div>
        <Child setValue={setValue} />
      </div>
    </>
  );
};

export default UpdateParentState;
