import Main from "../components/Main";
import About from "../components/About";
import Navbar from "../components/Navbar";
import { Projects } from "@/components/Projects";
import Skills from "../components/Skills";
import { Experiences } from "@/components/Experiences";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";
import ScrollProgressBar from "../components/ProgressBar";
import CircularCursor from "../components/CursorGlow";
import "./static/App.css";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden [bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <CircularCursor />
        <ScrollProgressBar />
        <Navbar />
        <Main />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Connect />
        <Footer />
      </main>
    </>
  );
}
