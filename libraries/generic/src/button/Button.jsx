import React from "react";
import "./Button.css"; // Include the plain CSS file for styling

const Button = ({ text, type = "default", onClick, disabled = false }) => {
  return (
    <button
      className={`button button-${type}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;