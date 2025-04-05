import React from "react";
import "./RadioButton.css";

const RadioButton = ({ label, checked, onChange }) => {
  return (
    <label className="radio-button-container">
      <input 
        type="radio" 
        checked={checked} 
        onChange={onChange} 
        className="radio-input"
      />
      <span className="radio-custom"></span>
      {label}
    </label>
  );
};

export default RadioButton;