"use client";
import React, { useState, useEffect, useRef } from "react";
import "../app/static/Cursor.css";

const CircularCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const updatePosition = (event) => {
      const { clientX, clientY, pageX, pageY } = event;

      cursorRef.current.style.transform = `translate(${
        pageX - cursorRef.current.clientWidth / 2
      }px, ${pageY - cursorRef.current.clientHeight / 2}px)`;
      followerRef.current.style.transform = `translate(${
        pageX - followerRef.current.clientWidth / 2
      }px, ${pageY - followerRef.current.clientHeight / 2}px)`;
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default CircularCursor;
