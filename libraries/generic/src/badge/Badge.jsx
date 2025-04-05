import React from "react";
import "./Badge.css"; // Include the plain CSS file for styling

const Badge = ({ text, type = "default" }) => {
  return <span className={`badge badge-${type}`}>{text}</span>;
};

export default Badge;