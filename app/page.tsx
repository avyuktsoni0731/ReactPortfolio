// import Image from "next/image";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ScrollProgressBar from "./components/ProgressBar";
import CursorGlow from "./components/CursorGlow";
import HamburgerMenu from "./components/HamburgerMenu";
import "./static/App.css";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollProgressBar />
      <Navbar />
      {/* <HamburgerMenu /> */}
      <Main />
      {/*       
      <div className="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto flex flex-col justify-between w-80 bg-black/40">
          <ul>
            <li>
              <a href="#main">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#work">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1gnF1YRNGqTjYibXuN2ZDj2zIN7qHD5y1/view?usp=sharing"
                target="_blank"
              >
                Resume / CV
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://github.com/avyuktsoni0731" target="_blank">
                <span
                  className="iconify mx-3 opacity-50 hover:opacity-90 transition duration-200"
                  data-icon="akar-icons:github-fill"
                  data-width="30"
                  data-height="30"
                ></span>
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/avyukt-soni-082447281/"
                target="_blank"
              >
                <span
                  className="iconify mx-3 opacity-50 hover:opacity-90 transition duration-200"
                  data-icon="akar-icons:linkedin-box-fill"
                  data-width="30"
                  data-height="30"
                ></span>
                LinkedIn
              </a>
            </li>
          </ul>
        </ul>
      </div> */}
    </>
  );
}
