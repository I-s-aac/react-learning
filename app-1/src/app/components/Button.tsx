"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode; // not optional?
  color?: string; // Define color as an optional prop
}

const Button: React.FC<ButtonProps> = ({ children, color }) => {
  return (
    <button
      style={{
        color: color || "black", // default color
      }}
    >
      {children}
    </button>
  );
};

export default Button;
