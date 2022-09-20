import React from "react";

const Child = () => {
  return (
    <div>
      <h1 style={{ color: "tomato", fontWeight: 800 }}>
        This is Children Content{" "}
      </h1>
    </div>
  );
};

const Parent = ({ children }) => {
  return (
    <>
      <h1>Parent</h1>
      {children}
    </>
  );
};

const AddChildComponent = () => {
  return (
    <Parent>
      <Child />
    </Parent>
  );
};

export default AddChildComponent;
