/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/C2KY1MqAXiN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import Image from "next/image";
import Reveal from "./Reveal";
import { useTypewriter } from "react-simple-typewriter";
import React, { useState } from "react";
import ImageHoverEffect from "./ImageHover";

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function Landing() {
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
      className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center items-center h-screen"
    >
      <div className="container px-4 md:px-6 flex justify-center">
        <div className="grid items-center justify-center gap-6 lg:grid-cols-2 lg:gap-48 font-Montserrat">
          <div className="space-y-4">
            <Reveal>
              <div className="text-lg font-Mono text-webGreen">
                Hi, my name is
              </div>
            </Reveal>
            <Reveal>
              <h1 className="text-4xl md:text-7xl text-[#ccd6f6] font-bold tracking-tighter sm:text-5xl">
                Avyukt Soni <span className="text-webRed fadeAnimate">_</span>
              </h1>
            </Reveal>
            <Reveal>
              <div className="text-lg font-mono text-webGrey text-muted-foreground">
                I&apos;m a <span className="typed-text">{text}</span>
                <span className={`blink ${isTyping ? "typing" : ""}`}>|</span>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="relative">
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-primary opacity-20 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-secondary opacity-20 blur-3xl" />
              <ImageHoverEffect src="/IMG_6136.jpeg" alt="profile-pic" />
              {/* <Image
                src="/profilePic.JPG"
                width={350}
                height={350}
                alt="Avyukt Soni"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover sm:w-full grayscale hover:grayscale-0 transition duration-300"
              /> */}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
