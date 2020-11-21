import React from "react";
import UseState_tutorial from "./useState_tutorial";
import UseStateArray from "./useState_array";

function Hook_tutorial() {
  return (
    <React.Fragment>
      <h1>Hook Tutorial</h1>
      <div className="container block">
        <div className="split left">
          <UseState_tutorial />
        </div>
        <div className="split right">
          <UseStateArray />
        </div>
      </div>
      <div className="container block">
        <div className="split left"></div>
        <div className="split right"></div>
      </div>
    </React.Fragment>
  );
}

export default Hook_tutorial;
