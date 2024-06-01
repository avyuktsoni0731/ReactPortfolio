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
    </>
  );
}
