import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UseStateObjects = () => {
  const [person, setPerson] = useState({
    name: "johnson",
    age: 26,
    message: "handsome",
  });

  const changeMessage = () => {
    if (person.message === "handsome") {
      setPerson({ ...person, message: "Very Handsome Ha Ha" });
    } else {
      setPerson({ ...person, message: "handsome" });
    }
  };

  return (
    <React.Fragment>
      <h3>useState object example</h3>
      <div>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Message: {person.message}</p>
        <Button variant="outline-success" onClick={changeMessage}>
          Change message
        </Button>
      </div>
    </React.Fragment>
  );
};

export default UseStateObjects;
