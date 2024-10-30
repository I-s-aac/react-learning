"use client";

import React, { useState } from "react";

interface ButtonProps {
  children: React.ReactNode; // not optional?
  color?: string; // Define color as an optional prop
}

const Button: React.FC<ButtonProps> = ({ children, color }) => {
  const [isVisible, setIsVisible] = useState(true); // State to track button visibility

  const handleClick = () => {
    setIsVisible(false); // Hide the button when clicked
  };

  return (
    <>
      {isVisible && ( // Render the button only if isVisible is true
        <button
          style={{
            color: color || "purple", // default color
          }}
          onClick={handleClick} // Handle the button click
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
