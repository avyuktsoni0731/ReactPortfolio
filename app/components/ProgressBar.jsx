"use client";
import React, { useState, useEffect } from "react";
import "../static/App.css";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = (scrollTop / docHeight) * 100;
      setProgress(newProgress);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial call to set progress on page load

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="scroll-progress-bar backdrop-blur-xl">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgressBar;
