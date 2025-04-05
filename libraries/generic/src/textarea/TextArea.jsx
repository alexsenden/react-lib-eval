import React from "react";
import "./TextArea.css";

const TextArea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className="large-textarea"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
