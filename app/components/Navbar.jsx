import React from "react";
import Iconify from "@iconify/react";
import Image from "next/image";
import "../static/App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed px-10 md:px-20 backdrop-blur-2xl">
        <div className="navbar-start navbarName">
          <a href="/">
            <Image src="/Globe.png" alt="avyukt-png" width={80} height={80} />
          </a>
          <a href="/">
            <h1 className="text-sm lg:text-3xl font-bold text-white font-Montserrat">
              <span className="text-[#64ffda]">A</span>vyukt Soni
              <span className="text-[#64ffda] fadeAnimate">_</span>
            </h1>
          </a>
        </div>

        <div className="navbar-center font-Montserrat list-none text-lg text-white/50 hidden md:flex">
          <li className="mr-3 text-[#64ffda] transition duration-300">
            <a href="#main">Home</a>
          </li>
          <li className="mr-3 hover:text-white/90 transition duration-300">
            <a href="#about">About Me</a>
          </li>
          <li className="mr-3 hover:text-white/90 transition duration-300">
            <a href="#work">Projects</a>
          </li>
          <li className="mr-3 hover:text-white/90 transition duration-300">
            <a href="#contact">Contact</a>
          </li>
        </div>

        <div className="navbar-start md:hidden"></div>
        <div className="navbar-center"></div>
        {/* 
        <div className="navbar-end hidden md:flex md:flex-row list-none opacity-100">
          <li>
            <a
              href="https://github.com/avyuktsoni0731"
              target="_blank"
              rel="noreferrer" // Added for accessibility
            >
              <Iconify
                className="mx-3 opacity-50 hover:opacity-90 transition duration-200"
                icon="akar-icons:github-fill"
                width="30"
                height="30"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/avyukt-soni-082447281/"
              target="_blank"
              rel="noreferrer" // Added for accessibility
            >
              <Iconify
                className="mx-3 opacity-50 hover:opacity-90 transition duration-200"
                icon="akar-icons:linkedin-box-fill"
                width="30"
                height="30"
              />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1gnF1YRNGqTjYibXuN2ZDj2zIN7qHD5y1/view?usp=sharing"
              target="_blank"
              rel="noreferrer" // Added for accessibility
            >
              <Iconify
                className="mx-3 opacity-50 hover:opacity-90 transition duration-200"
                icon="akar-icons:file"
                width="30"
                height="30"
              />
            </a>
          </li>
        </div>

        <div className="navbar-end md:hidden">
          <label htmlFor="my-drawer-3">
            <Iconify
              className="iconify cursor-pointer"
              icon="ci:hamburger"
              style={{ color: "white" }}
              width="40"
              height="40"
            />
          </label>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;