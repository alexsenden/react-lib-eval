import React from "react";
import "./Select.css";

const Select = ({ options, value, onChange }) => {
  return (
    <div className="select-container">
      <select className="select-box" value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;