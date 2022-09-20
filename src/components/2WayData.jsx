import React, { useState } from "react";

const TwoWayData = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h2>Two Way Data</h2>
      <input
        type="text"
        id="value"
        value={value}
        onChange={handleChange}
        placeholder="Enter any text"
        autoFocus
      />
      <p>
        <strong>Text:</strong> {value}
      </p>
    </div>
  );
};

export default TwoWayData;
