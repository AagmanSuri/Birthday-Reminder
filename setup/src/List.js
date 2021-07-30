import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [values, setValues] = useState(data);
  const removeHandeler = () => {
    setValues([]);
  };
  return (
    <div className="container" style={{ marginLeft: "30rem" }}>
      <h3>{values.length} birthdays today</h3>
      {values.map((people, i) => {
        return (
          <div className="person" key={people.id}>
            <img alt="img" src={people.image}></img>
            <div>
              <h3>{people.name}</h3>
              <p>{people.age} years</p>
            </div>
          </div>
        );
      })}
      <button type="button" onClick={removeHandeler}>
        Remove All
      </button>
    </div>
  );
};

export default List;
