import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Original Text");
  const handleRandomText = () => {
    if (text === "Original Text") {
      setText("Hello Peopleee");
    } else {
      setText("Original Text");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" onClick={handleRandomText} className="btn">
        TextGenerator
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
