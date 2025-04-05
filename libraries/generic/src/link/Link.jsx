import React from "react";
import "./Link.css";

const Link = ({ href, text, target = "_self", disabled = false }) => {
  return (
    <a
      href={disabled ? undefined : href}
      target={target}
      className={`link ${disabled ? "link-disabled" : ""}`}
      onClick={(e) => disabled && e.preventDefault()}
    >
      {text}
    </a>
  );
};

export default Link;
