"use client";
import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import "../app/static/App.css";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="flex flex-col md:items-start md:justify-normal items-center justify-center h-auto"
      >
        <div className="px-16 xl:px-96 space-y-4 items-center">
          <Reveal>
            <h1
              id="about"
              className="text-2xl md:text-4xl font-bold text-[#ccd6f6]"
            >
              About Me<span className="text-webGreen fadeAnimate">.</span>
            </h1>
          </Reveal>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
            <Reveal>
              <div className="text-base font-mono space-y-6">
                <p>
                  Hey there! My name is{" "}
                  <span className="text-webGreen">Avyukt</span> , and I{" "}
                  <span className="text-webRed">love</span> creating things that
                  live on the internet. My interest in programming started back
                  in my school life, when I used to create mini projects using
                  Python - Well, lets just say I like experimenting and creating
                  things in my own way and turning ideas into reality!
                </p>
                <p>
                  Fast-forward to today, I am current a 1st year undergrad
                  student pursuing my Bachelors of Technology, majoring in
                  <span className="text-webGreen">
                    {" "}
                    Computer Engineering
                  </span> @{" "}
                  <span className="text-[#d2b94b] hover:text-[#e8e8e8] transition duration-200">
                    <a
                      href="https://amu.ac.in/colleges/zakir-husain-college-of-engineering-and-technology"
                      target="_blank"
                    >
                      Zakir Husain College of Engineering & Technology, AMU.
                    </a>
                  </span>{" "}
                </p>
                <p>
                  My main focus these days is learning somethign new and
                  building accessable and inclusive products that make a
                  differnce. I&apos;ve been so much into talking to new people,
                  making new friends, and building an inclusive community around
                  me. This is what I <span className="text-webRed">love</span>{" "}
                  doing.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <Image
                src="/profilePic.JPG"
                alt="profile-picture"
                width={350}
                height={350}
                className="rounded-sm border-webRed grayscale transition duration-300 hover:grayscale-0 pt-8 md:pt-0"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
