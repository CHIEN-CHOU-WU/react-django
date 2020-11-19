import React from "react";
import "./basic_tutorial.css";

const booksName = [
  {
    id: 1,
    name: "The Deep End (Diary of a Wimpy Kid Book 15)",
    author: "Jeff Kinney",
    price: "14.99",
  },
  {
    id: 2,
    name:
      "Dog Man: Grime and Punishment: From the Creator of Captain Underpants",
    author: "Dav Pilkey",
    price: "12.99",
  },
  {
    id: 3,
    name: "A Time for Mercy (Jake Brigance)",
    author: "John Grisham",
    price: "29.95",
  },
];

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

const Book2 = ({name, author, price}) => {
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

function Basic() {
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
    </div>
  );
}

export default Basic;
