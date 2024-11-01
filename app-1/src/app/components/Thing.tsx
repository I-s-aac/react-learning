"use client";
import { Html } from "next/document";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

// useRef, useEffect, and useState example
// useRef doesn't re-render components
function Element() {
  const element = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState<string | undefined>("");

  useEffect(() => {
    console.log(element.current?.value);
  }, [value]);

  const onChange = (event: React.ChangeEvent) => {
    setValue(element.current?.value);
  };

  return (
    <input
      onChange={onChange}
      ref={element}
      onClick={() => {
        if (element.current) {
          element.current.style.backgroundColor = "green";
        }
      }}
      style={{ backgroundColor: "orange", height: "100px", width: "100px" }}
    />
  );
}

export default Element;
