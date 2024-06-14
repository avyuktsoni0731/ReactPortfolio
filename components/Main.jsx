"use client";
import React, { useState } from "react";
import Reveal from "./Reveal";
import "../app/static/App.css"; // Make sure to include the necessary CSS in this file
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
    <section
      id="main"
      className="flex flex-col justify-center items-center h-screen"
    >
      <div className="h-[20vh] font-Montserrat animate-in">
        <Reveal>
          <div className="py-2">
            <p className="text-lg font-Mono text-webGreen">Hi, my name is</p>
          </div>
        </Reveal>
        <Reveal>
          <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">
            Avyukt Soni
            <span className="text-webRed fadeAnimate">_</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-lg font-Mono text-webGrey mt-4 mb-8 text-white/70 w-[300px] lg:w-[500px]">
            I am a <span className="typed-text">{text}</span>
            <span className={`blink ${isTyping ? "typing" : ""}`}>|</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default App;
