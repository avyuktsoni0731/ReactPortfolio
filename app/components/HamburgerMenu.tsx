"use client";
import { routes } from "./routes";
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
      <div ref={ref} className="lg:hidden ">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
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
                      className="w-full bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                    >
                      <a
                        onClick={() => setOpen((prev) => !prev)}
                        className={
                          "flex items-center justify-between w-full p-4 bg-neutral-950"
                        }
                        href={route.href}
                        target={route.target}
                      >
                        <span className="flex text-lg bg-neutral-950">
                          {route.title}
                        </span>
                        {/* <Icon className="text-xl" /> */}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HamburgerMenu;
