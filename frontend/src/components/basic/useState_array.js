import React from "react";
import { Button } from "react-bootstrap";

const UseStateArray = () => {
  const data = [
    { id: 1, name: "johnson" },
    { id: 2, name: "Sally" },
    { id: 3, name: "Michel" },
    { id: 4, name: "Darron" },
  ];

  const [people, setPeople] = React.useState(data);
  const removeItem = id => {
    let newPeople = people.filter(person => person.id !== id);
    // console.log(newPeople);
    setPeople(newPeople);
  };
  return (
    <React.Fragment>
      <h3>useState array example</h3>
      {people.map(person => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id}>
            <p>
              {name} &nbsp;
              <Button variant="outline-success" onClick={() => removeItem(id)}>
                Delete
              </Button>
            </p>
          </div>
        );
      })}
      <br />
      <Button variant="outline-danger" onClick={() => setPeople([])}>
        Clear All
      </Button>
      &nbsp;
      <Button variant="outline-info" onClick={() => setPeople(data)}>
        Reset All
      </Button>
    </React.Fragment>
  );
};

export default UseStateArray;
