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
      {/* <section className="flex flex-col md:items-start md:justify-normal items-center justify-center h-[100vh]"> */}
      <div className="flex flex-col md:items-start md:justify-normal items-center justify-center h-[100vh]">
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
                  Hey there! My name is Avyukt, and I{" "}
                  <span className="text-webRed">love</span> creating things that
                  live on the internet. My interest in web development started
                  back in 2012 when I decided to try editing custom Tumblr
                  themes - turns out hacking together a custom reblog button
                  taught me a lot about HTML & CSS!
                </p>
                <p className="">
                  Fast-forward to today, and Ive had the privilege of working at
                  an advertising agency, a start-up, a huge corporation, and a
                  student-led design studio. My main focus these days is
                  building accessible, inclusive products and digital
                  experiences at Upstatement for a variety of clients.
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
      </div>
      {/* </section> */}
    </>
  );
};

export default About;
