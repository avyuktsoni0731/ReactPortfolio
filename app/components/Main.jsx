"use client";
import React, { useEffect, useState, useRef } from "react";
// import {} from "animate.css-react";
import "../static/App.css"; // Make sure to include the necessary CSS in this file

// const App = () => {
//   const [typeValue, setTypeValue] = useState("");
//   const [typeStatus, setTypeStatus] = useState(false);
//   const [typeArrayIndex, setTypeArrayIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   const typeArray = ["Student", "Developer", "Programmer"];
//   const typingSpeed = 150;
//   const erasingSpeed = 100;
//   const newTextDelay = 2000;

//   useEffect(() => {
//     const typeText = () => {
//       if (charIndex < typeArray[typeArrayIndex].length) {
//         if (!typeStatus) setTypeStatus(true);

//         setTypeValue(
//           (prev) => prev + typeArray[typeArrayIndex].charAt(charIndex)
//         );
//         setCharIndex((prev) => prev + 1);

//         setTimeout(typeText, typingSpeed);
//       } else {
//         setTypeStatus(false);
//         setTimeout(eraseText, newTextDelay);
//       }
//     };

//     const eraseText = () => {
//       if (charIndex > 0) {
//         if (!typeStatus) setTypeStatus(true);

//         setTypeValue(typeArray[typeArrayIndex].substring(0, charIndex - 1));
//         setCharIndex((prev) => prev - 1);

//         setTimeout(eraseText, erasingSpeed);
//       } else {
//         setTypeStatus(false);
//         setTypeArrayIndex((prev) =>
//           prev + 1 >= typeArray.length ? 0 : prev + 1
//         );

//         setTimeout(typeText, typingSpeed + 500);
//       }
//     };

//     setTimeout(typeText, newTextDelay + 200);
//   }, [
//     charIndex,
//     typeArrayIndex,
//     typeStatus,
//     typingSpeed,
//     erasingSpeed,
//     newTextDelay,
//   ]);

//   return (
//     <section className="flex flex-col justify-center items-center h-screen w-screen">
//       <div className="h-[20vh] font-Montserrat animate-in">
//         <div className="py-2">
//           <p className="text-lg font-mono text-[#64ffda]">Hi, my name is</p>
//         </div>
//         <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">
//           Avyukt Soni
//           <span className="text-[#FF2E63] fadeAnimate">_</span>
//         </h1>
//         <p className="text-lg font-mono text-[#a8b2d1] mt-4 mb-8 text-white/70 w-[300px] lg:w-[500px]">
//           I am a <span className="typed-text">{typeValue}</span>
//           <span className={`blink ${typeStatus ? "typing" : ""}`}>|</span>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default App;

// import React, { useState, useEffect, useRef } from 'react';
// import 'animate.css'; // Import animation library

const App = () => {
  //   const [typeValue, setTypeValue] = useState("");
  //   const [typeStatus, setTypeStatus] = useState(false);
  //   const [typeArray, setTypeArray] = useState([
  //     "Student",
  //     "Developer",
  //     "Programmer",
  //   ]);
  //   const [typingSpeed, setTypingSpeed] = useState(150);
  //   const [erasingSpeed, setErasingSpeed] = useState(100);
  //   const [newTextDelay, setNewTextDelay] = useState(2000);
  //   const [charIndex, setCharIndex] = useState(0);
  //   const [typeArrayIndex, setTypeArrayIndex] = useState(0);
  //   const typingRef = useRef(null);

  //   useEffect(() => {
  //     const handleTypeText = () => {
  //       if (charIndex < typeArray[typeArrayIndex].length) {
  //         if (!typeStatus) {
  //           setTypeStatus(true);
  //         }
  //         setTypeValue(
  //           (prevValue) => prevValue + typeArray[typeArrayIndex][charIndex]
  //         );
  //         setCharIndex((prevIndex) => prevIndex + 1);
  //       } else {
  //         setTypeStatus(false);
  //         setTimeout(() => {
  //           handleEraseText();
  //         }, newTextDelay);
  //       }
  //     };

  //     const handleEraseText = () => {
  //       if (charIndex > 0) {
  //         if (!typeStatus) {
  //           setTypeStatus(true);
  //         }
  //         setTypeValue(typeArray[typeArrayIndex].substring(0, charIndex - 1));
  //         setCharIndex((prevIndex) => prevIndex - 1);
  //       } else {
  //         setTypeStatus(false);
  //         setTypeArrayIndex((prevIndex) => (prevIndex + 1) % typeArray.length); // Wrap around
  //         setTimeout(() => {
  //           handleTypeText();
  //         }, typingSpeed + 500);
  //       }
  //     };

  //     typingRef.current = handleTypeText;

  //     return () => clearTimeout(typingRef.current);
  //   }, [
  //     typeValue,
  //     charIndex,
  //     typeStatus,
  //     typeArray,
  //     typeArrayIndex,
  //     typingSpeed,
  //     erasingSpeed,
  //     newTextDelay,
  //   ]);

  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       typingRef.current();
  //     }, newTextDelay + 200);

  //     return () => clearTimeout(timeout);
  //   }, []);
  const [typeValue, setTypeValue] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [typeArrayIndex, setTypeArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const typeArray = ["Student", "Developer", "Programmer"];
  const typingSpeed = 150;
  const erasingSpeed = 150;
  const newTextDelay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      if (charIndex < typeArray[typeArrayIndex].length) {
        setTypeValue(
          (prev) => prev + typeArray[typeArrayIndex].charAt(charIndex)
        );
        setCharIndex((prev) => prev + 1);
      } else {
        setIsTyping(false);
        setTimeout(() => setIsTyping(true), newTextDelay);
      }
    };

    const handleErasing = () => {
      if (charIndex > 0) {
        setTypeValue((prev) => prev.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setTypeArrayIndex((prev) => (prev + 1) % typeArray.length);
        setIsTyping(true);
      }
    };

    if (isTyping) {
      const typingTimeout = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(typingTimeout);
    } else {
      const erasingTimeout = setTimeout(handleErasing, erasingSpeed);
      return () => clearTimeout(erasingTimeout);
    }
  }, [charIndex, isTyping, typeArrayIndex, typeArray]);

  useEffect(() => {
    const startTyping = setTimeout(() => setIsTyping(true), newTextDelay + 200);
    return () => clearTimeout(startTyping);
  }, []);

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
          I am a <span className="typed-text">{typeValue}</span>
          <span className={`blink ${isTyping ? "typing" : ""}`}>|</span>
        </p>
      </div>
    </section>
  );
};

export default App;
