import React, { useState } from "react";
import { Button } from "react-bootstrap";

function UseState_tutorial() {
  let title = "動態標題";
  const [text, setText] = useState(title);
  const handleClick = () => {
    if (text === "動態標題") {
      setText("已經改變的標題");
    } else {
      setText("動態標題");
    }
  };
  return (
    <React.Fragment>
      <h3>{text}</h3>
      <p>使用 useState 變動狀態</p>
      <ul>
        <li>handleClick function</li>
        <li>using if, else</li>
      </ul>
      <Button variant="outline-info" onClick={handleClick}>
        改變標題
      </Button>
    </React.Fragment>
  );
}

export default UseState_tutorial;
