"use client";
import Reveal from "./Reveal";
import { useTypewriter } from "react-simple-typewriter";
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";

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
        <div className="grid items-center justify-center gap-6 lg:grid-cols-2 lg:gap-32 font-Montserrat">
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
            <div className="flex justify-center lg:justify-end">
              <ProfileCard
                name="Avyukt Soni"
                title="Developer & Student"
                handle="avyuktsoni0731"
                contactText="Get in Touch"
                avatarUrl="/IMG_6136.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  document
                    .getElementById("connect")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
