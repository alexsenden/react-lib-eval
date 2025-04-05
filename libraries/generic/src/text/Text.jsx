import React from "react";
import "./Text.css";

const Text = ({ type, content }) => {
  return <p className={`text ${type}`}>{content}</p>;
};

export default Text;