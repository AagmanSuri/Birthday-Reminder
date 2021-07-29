import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [values, setValues] = useState(data);
  return (
    <div>
      {values.map((people) => {
        return (
          <div key={people.id}>
            <img src={people.image}></img>
            <h3>{people.name}</h3>
            <small>{people.age}</small>
          </div>
        );
      })}
    </div>
  );
};

export default List;
