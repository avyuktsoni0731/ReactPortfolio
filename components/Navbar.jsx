import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import "../app/static/App.css";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed px-10 md:px-20 backdrop-blur-2xl">
        <div className="navbar-start navbarName pl-10">
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
          <li className="mr-3 hover:text-[#fff] transition duration-300">
            <a href="#about">About Me</a>
          </li>
          <li className="mr-3 hover:text-[#fff] transition duration-300">
            <a href="#work">Projects</a>
          </li>
          <li className="mr-3 hover:text-[#fff] transition duration-300">
            <a href="#contact">Contact</a>
          </li>
        </div>

        <div className="navbar-end hidden md:flex md:flex-row list-none opacity-100 pr-10">
          <li>
            <a
              href="https://github.com/avyuktsoni0731"
              target="_blank"
              rel="noreferrer" // Added for accessibility
            >
              <Icon
                className="mx-3 opacity-30 hover:opacity-70 transition duration-200"
                icon="akar-icons:github-fill"
                width="30"
                height="30"
                style={{ color: "#fff" }}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/avyukt-soni-082447281/"
              target="_blank"
              rel="noreferrer" // Added for accessibility
            >
              <Icon
                className="mx-3 opacity-30 hover:opacity-70 transition duration-200"
                icon="akar-icons:linkedin-box-fill"
                width="30"
                height="30"
                style={{ color: "#fff" }}
              />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1gnF1YRNGqTjYibXuN2ZDj2zIN7qHD5y1/view?usp=sharing"
              target="_blank"
              rel="noreferrer" // Added for accessibility
            >
              <Icon
                className="mx-3 opacity-30 hover:opacity-70 transition duration-200"
                icon="akar-icons:file"
                width="30"
                height="30"
                style={{ color: "#fff" }}
              />
            </a>
          </li>
        </div>

        <div className="navbar-end md:hidden">
          <HamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;