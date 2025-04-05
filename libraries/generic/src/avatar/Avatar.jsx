import React from "react";
import "./Avatar.css"; // Include the plain CSS file for styling

const Avatar = ({ src, alt = "Avatar", size = "medium" }) => {
  return (
    <div className={`avatar avatar-${size}`}>
      <img className="avatar-img" src={src} alt={alt} />
    </div>
  );
};

export default Avatar;