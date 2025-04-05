import React, { useState } from "react";
import "./Toggle.css";

const Toggle = ({ isActive = false }) => {
  const [isOn, setIsOn] = useState(isActive);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-container">
      <div
        className={`toggle-switch ${isOn ? "on" : "off"}`}
        onClick={toggleSwitch}
      >
        <div className="toggle-knob"></div>
      </div>
      <span className="toggle-label">{isOn ? "ON" : "OFF"}</span>
    </div>
  );
};

export default Toggle;
