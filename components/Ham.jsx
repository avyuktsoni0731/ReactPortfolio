"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { React, useState, useRef } from "react";
import { useClickAway } from "react-use";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Me", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact Me", href: "#contact" },
  {
    title: "Resume / CV",
    href: "https://drive.google.com/file/d/1gnF1YRNGqTjYibXuN2ZDj2zIN7qHD5y1/view?usp=sharing",
    target: "_blank",
  },
];

const Ham = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <div ref={ref} className="lg:hidden inline-block">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 w-full origin-top h-screen text-black"
            >
              <div className="flex pb-32 h-full flex-col">
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full items-center justify-center font-Montserrat font-semibold space-y-4
          "
                >
                  {navLinks.map((link, index) => {
                    return (
                      <>
                        <div className="overflow-hidden">
                          <MobileNavLink
                            key={index}
                            title={link.title}
                            href={link.href}
                          />
                        </div>
                      </>
                    );
                  })}
                  <div className="flex flex-row space-x-4 pt-16">
                    <p className="">
                      <a
                        href="https://github.com/avyuktsoni0731"
                        className="flex flex-row items-center"
                      >
                        <span className="iconify opacity-50 hover:opacity-90 transition duration-200">
                          <Icon
                            className="mx-3 opacity-30 hover:opacity-70 transition duration-200"
                            icon="akar-icons:github-fill"
                            width="30"
                            height="30"
                            style={{ color: "#fff" }}
                          />
                        </span>
                        Github{" "}
                      </a>
                    </p>
                    <p className="">
                      <a
                        href="https://www.linkedin.com/in/avyukt-soni-082447281/"
                        className="flex flex-row items-center"
                      >
                        <span className="iconify opacity-50 hover:opacity-90 transition duration-200">
                          <Icon
                            className="mx-3 opacity-30 hover:opacity-70 transition duration-200"
                            icon="akar-icons:linkedin-box-fill"
                            width="30"
                            height="30"
                            style={{ color: "#fff" }}
                          />
                        </span>
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Ham;

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
