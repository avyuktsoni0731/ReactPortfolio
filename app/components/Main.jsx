"use client";
import React, { useEffect, useState, useRef } from "react";
// import {} from "animate.css-react";
import "../static/App.css"; // Make sure to include the necessary CSS in this file
import { useTypewriter } from "react-simple-typewriter";

const App = () => {
  const [isTyping, isTypingStatus] = useState(true);
  const [text] = useTypewriter({
    words: ["Student", "Developer", "Programmer"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 2000,
  });

  return (
    <section className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="h-[20vh] font-Montserrat animate-in">
        <div className="py-2">
          <p className="text-lg font-mono text-[#64ffda]">Hi, my name is</p>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">
          Avyukt Soni
          <span className="text-[#FF2E63] fadeAnimate"> _</span>
        </h1>
        <p className="text-lg font-mono text-[#a8b2d1] mt-4 mb-8 text-white/70 w-[300px] lg:w-[500px]">
          I am a <span className="typed-text">{text}</span>
          <span className={`blink ${isTyping ? "typing" : ""}`}>|</span>
        </p>
      </div>
    </section>
  );
};

export default App;
