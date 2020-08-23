import React from "react";

function InputName({ handleInput, handleSubmit, inputValue }) {
  return (
    <div className="card card-body mt-4">
      <h3 className="text-center card-title">Enter your name </h3>
      <p className="text-center">
        (Get the Country name starts with your name's letter)
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter your name "
            onChange={handleInput}
          />
          <button
            type="submit"
            className="btn btn-success btn-block mt-2"
            disabled={inputValue.length === 0 ? true : false}
          >
            Get Country Names
          </button>
        </div>
      </form>
    </div>
  );
}
export default InputName;
