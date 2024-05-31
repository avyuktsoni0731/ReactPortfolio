"use client";
import React, { useState, useEffect, useRef } from "react";
import "../static/App.css";

const CursorGlow = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (event) => {
      setX(event.clientX);
      setY(event.clientY);
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-glow"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
};

export default CursorGlow;
