"use client";
import React, { useState, useRef } from "react";

type CheckerProps = {
  id: string;
  color: string; // e.g., "red" or "black"
  initialX: number; // Initial x position
  initialY: number; // Initial y position
};

const Checker: React.FC<CheckerProps> = ({ id, color, initialX, initialY }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const checkerRef = useRef<HTMLDivElement | null>(null); // Create a ref for the checker

  // Start dragging
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", id);
    console.log(`Dragging checker with ID: ${id}`);
  };

  // Move checker with the mouse
  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (checkerRef.current) {
      const boundingRect = checkerRef.current.getBoundingClientRect();
      const newX = e.clientX - 20; // Center the checker
      const newY = e.clientY - 20; // Center the checker
      setPosition({ x: newX, y: newY });
    }
  };

  // End dragging
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX - 20, y: e.clientY - 20 });
    console.log(
      `Dropped checker with ID: ${id} at (${position.x}, ${position.y})`
    );
  };

  return (
    <div
      ref={checkerRef} // Attach the ref to the div
      draggable
      onDragStart={onDragStart} // Handle drag start
      onDrag={onDrag} // Handle drag movement
      onDragEnd={onDragEnd} // Handle drag end
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: color || "white",
        borderRadius: "50%",
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "grab",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    />
  );
};

export default Checker;
