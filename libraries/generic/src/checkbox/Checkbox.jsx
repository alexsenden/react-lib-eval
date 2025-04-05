import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ label, checked = false, onChange, disabled = false }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleOnChange = (e) => {
    setIsChecked(e.target.checked);
    onChange(e);
  };

  return (
    <label
      className={`checkbox-container ${disabled ? "checkbox-disabled" : ""}`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleOnChange}
        disabled={disabled}
        className="checkbox-input"
      />
      <span className="checkbox-checkmark"></span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;
