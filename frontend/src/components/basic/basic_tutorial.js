import React from "react";
import { Button } from "react-bootstrap";
import { booksName } from "./books";

function Basic() {
  // 方法一
  function ListingDict1() {
    return (
      <section>
        {booksName.map(bookitem => {
          return <Book1 key={bookitem.id} bookitem={bookitem}></Book1>;
        })}
      </section>
    );
  }

  const Book1 = props => {
    const { name, author, price } = props.bookitem;
    return (
      <div>
        <strong>{name}</strong>
        <p>
          {author} - {price}
        </p>
      </div>
    );
  };

  // 方法二
  function ListingDict2() {
    return (
      <section>
        {booksName.map(bookitem => {
          return <Book2 key={bookitem.id} {...bookitem}></Book2>;
        })}
      </section>
    );
  }

  const Book2 = ({ name, author, price }) => {
    //const { name, author, price } = props;
    return (
      <div>
        <strong>{name}</strong>
        <p>
          {author} - {price}
        </p>
      </div>
    );
  };

  const onClickEvent = e => {
    console.log(e);
    console.log(e.target);
  };

  return (
    <div>
      <h2>Listing a dictionary</h2>
      <section className="grid-container">
        <article className="grid-1">
          <h3> Method one </h3>
          <ListingDict1 />
        </article>
        <article className="grid-2">
          <h3> Method two </h3>
          <ListingDict2 />
        </article>
      </section>
      <section>
        <br />
        <article>
          <h2>onClick</h2>
          <Button variant="danger" onClick={() => alert("Watch out")}>
            Watch Out
          </Button>{" "}
          <Button variant="primary" onClick={onClickEvent}>
            On Click Event
          </Button>
          <Button
            variant="outline-warning"
            onMouseOver={() => {
              console.log(booksName);
            }}
          >
            On Mouse Over and Look at console log
          </Button>
        </article>
      </section>
    </div>
  );
}

export default Basic;
