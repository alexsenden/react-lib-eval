import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, title, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{content}</div>
        <div className="modal-footer">
          <button className="modal-action-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
