import React from "react";
import "./Card.css"; // Include the plain CSS file for styling

const Card = ({ title, content, footer }) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;