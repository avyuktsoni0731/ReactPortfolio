"use client";
import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import "../static/App.css";
import { color } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="flex flex-col md:items-start md:justify-normal items-center justify-center h-screen w-screen">
        <div className="px-96">
          <Reveal>
            <h1 className="text-2xl md:text-4xl font-bold text-[#ccd6f6]">
              About Me<span className="text-webGreen fadeAnimate">.</span>
            </h1>
          </Reveal>
          <div className="flex flex-row justify-between space-x-4">
            <Reveal>
              <p className="text-lg font-mono">
                Hey there! My name is Avyukt, and I love creating things that
                live on the internet. My interest in web development started
                back in 2012 when I decided to try editing custom Tumblr themes
                - turns out hacking together a custom reblog button taught me a
                lot about HTML & CSS!
              </p>
            </Reveal>
            <Reveal>
              <div className="border-4 border-webGreen rounded-lg">
                <Image
                  src="/profilePic.JPG"
                  alt="profile-picture"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
