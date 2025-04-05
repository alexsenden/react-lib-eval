import React from "react";
import "./Input.css";

const Input = ({
  label,
  value,
  onChange,
  placeholder = "",
  disabled = false,
}) => {
  return (
    <div
      className={`text-input-container ${
        disabled ? "text-input-disabled" : ""
      }`}
    >
      {label && <label className="text-input-label">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="text-input-field"
      />
    </div>
  );
};

export default Input;
