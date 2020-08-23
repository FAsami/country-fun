import React, { useState } from "react";
import InputName from "./Components/InputName";
import Name from "./Components/Name";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setName(inputValue);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto">
          <InputName
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            inputValue={inputValue}
          />
          <Name name={name} />
        </div>
      </div>
    </div>
  );
}
