import React, { useState } from "react";
import DisplayUsers from "./DisplayUsers";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="row">
      <div className="container">
        {show && <DisplayUsers />}
        <button onClick={handleClick} className="btn btn-dark">
          {show ? "Hide Element" : "Show Element"}
        </button>
      </div>
    </div>
  );
};

export default ShowHide;
