"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import "../static/App.css";
import { color } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="flex flex-col md:items-start md:justify-normal items-center justify-center h-screen">
        <div className="px-16 md:px-96 space-y-4">
          <Reveal>
            <h1 className="text-2xl md:text-4xl font-bold text-[#ccd6f6]">
              About Me<span className="text-webGreen fadeAnimate">.</span>
            </h1>
          </Reveal>
          <div className="flex flex-col md:flex-row justify-between space-x-4 space-y-6">
            <Reveal>
              <div className="text-base font-mono space-y-6">
                <p className="">
                  Hey there! My name is{" "}
                  <span className="text-webGreen">Avyukt</span> , and I{" "}
                  <span className="text-webRed">love</span> creating things that
                  live on the internet. My interest in programming started back
                  in my school life, when I used to create mini projects using
                  Python - Well, lets just say I like experimenting and creating
                  things in my own way and turning ideas into reality!
                </p>
                <p className="">
                  Fast-forward to today, I am current a 1st year undergrad
                  student pursuing my Bachelors of Technology, majoring in
                  <span className="text-webGreen">
                    {" "}
                    Computer Engineering
                  </span> @{" "}
                  <span className="text-[#e8e8e8]">
                    <a
                      href="https://amu.ac.in/colleges/zakir-husain-college-of-engineering-and-technology"
                      target="_blank"
                    >
                      Zakir Husain College of Engineering & Technology, AMU.
                    </a>
                  </span>{" "}
                  My main focus these days is learning and building accessable
                  and inclusive products that make a differnce,
                </p>
              </div>
            </Reveal>
            <Reveal>
              <Image
                src="/profilePic.JPG"
                alt="profile-picture"
                width={300}
                height={300}
                className="rounded-sm border-webRed grayscale hover:grayscale-0"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
