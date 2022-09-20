import React, { useState } from "react";

const SumNumbers = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    setTotal(Number(number1) + Number(number2));
  };

  return (
    <>
      <div className="mb-3">
        <input
          name="number1"
          type="number"
          min={0}
          onChange={(e) => setNumber1(e.target.value)}
        />

        <input
          name="number2"
          type="number"
          min={0}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick} className="btn btn-dark">
          Submit
        </button>
      </div>
      <p className="mt-2">
        Total:<strong>{total}</strong>
      </p>
    </>
  );
};

export default SumNumbers;
