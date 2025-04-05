import React from "react";
import "./Alert.css"; // Include the plain CSS file for styling

const Alert = ({ type = "info", message, onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-message">{message}</span>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
