"use client";
import { routes } from "../src/routes";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  return (
    <>
      <div ref={ref} className="lg:hidden inline-block">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 h-screen w-screen"
            >
              <ul className="grid">
                {routes.map((route, idx) => {
                  const { Icon } = route;

                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={route.title}
                      className="w-full"
                    >
                      <a
                        onClick={() => setOpen((prev) => !prev)}
                        className={
                          "flex items-center justify-between w-full p-4"
                        }
                        href={route.href}
                        target={route.target}
                      >
                        <span className="flex text-lg">{route.title}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <ul className="mt-[40vh] text-lg">
                <li className="py-6">
                  <a
                    href="https://github.com/avyuktsoni0731"
                    className="flex flex-row"
                    target="_blank"
                  >
                    <span className="iconify mx-3 opacity-50 hover:opacity-90 transition duration-200">
                      <Icon
                        className="mx-3 opacity-30 hover:opacity-70 transition duration-200"
                        icon="akar-icons:github-fill"
                        width="30"
                        height="30"
                        style={{ color: "#fff" }}
                      />
                    </span>
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/avyukt-soni-082447281/"
                    target="_blank"
                    className="flex flex-row"
                  >
                    <span className="iconify mx-3 opacity-50 hover:opacity-90 transition duration-200">
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
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HamburgerMenu;
