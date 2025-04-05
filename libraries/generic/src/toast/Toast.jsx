import React from "react";
import "./Toast.css";

const Toast = ({ message, type, onClose }) => {
  return (
    <div className={`toast ${type}`}>
      <span className="toast-message">{message}</span>
      <button className="close-button" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Toast;
