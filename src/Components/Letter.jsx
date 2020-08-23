import React from "react";

function Letter({ letter, country }) {
  return (
    <div className="d-flex align-items-center">
      <h5 className="text-center bg-light mr-3">{" " + letter} -</h5>
      <h5 className="text-center bg-light "> {country || "(not found)"}</h5>
    </div>
  );
}
export default Letter;
