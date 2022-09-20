import React, { useState } from "react";

const DisableButton = () => {
  const [values, setValues] = useState("");

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  return (
    <div>
      <h2> Disable Button</h2>
      <input
        type="text"
        value={values}
        placeholder="Enter any character"
        onChange={handleChange}
      />
      <button disabled={values.length < 1} className="btn btn-dark">
        Submit
      </button>
    </div>
  );
};

export default DisableButton;
