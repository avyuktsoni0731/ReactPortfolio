"use client";
import React, { useState, useEffect, useRef } from "react";
import "../app/static/Cursor.css";

// const CursorGlow = () => {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const updateCursorPosition = (event) => {
//       setX(event.clientX);
//       setY(event.clientY);
//     };

//     window.addEventListener("mousemove", updateCursorPosition);

//     return () => window.removeEventListener("mousemove", updateCursorPosition);
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="cursor-glow"
//       style={{
//         left: `${x}px`,
//         top: `${y}px`,
//       }}
//     />
//   );
// };

// export default CursorGlow;

const CircularCursor = () => {
  useEffect(() => {
    const circleSvg = document.querySelector(".cursor-svg");

    let mouseX = 0;
    let mouseY = 0;

    const updatePosition = () => {
      circleSvg.style.left = `${mouseX}px`;
      circleSvg.style.top = `${mouseY}px`;
      requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX + window.scrollX;
      mouseY = event.clientY + window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <svg
      className="cursor-svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlLang="en"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
    >
      <title>Circular Text Path</title>
      <defs>
        <path
          id="textcircle"
          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
          transform="rotate(12,250,250)"
        />
      </defs>
      <rect width="100%" height="100%" fill="none" />
      <text>
        <textPath
          xlinkHref="#textcircle"
          aria-label="All for One &amp; One for All"
          textLength="942"
          className="cursor-text"
        >
          VIEW THE PORTFOLIO.
        </textPath>
      </text>
    </svg>
  );
};

export default CircularCursor;
