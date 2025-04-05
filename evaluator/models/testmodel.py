class TestModel:
    def __init__(self):
        pass

    def generate(self, prompt):
        return """import React, { useState } from "react";

const TextArea = ({ label, placeholder, rows, cols }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="textarea-container">
      {label && <label>{label}</label>}
      <textarea
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
      />
      <p>Character count: {text.length}</p>
    </div>
  );
};
"""
