import React from "react";
import "./List.css";

const List = ({ items = [] }) => {
  return (
    <ol className="list">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item}
        </li>
      ))}
    </ol>
  );
};

export default List;
