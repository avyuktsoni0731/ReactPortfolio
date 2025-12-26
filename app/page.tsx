import { Landing } from "@/components/landing";
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
import { Contributions } from "@/components/Contributions";
import ClickSpark from "@/components/ClickSpark";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <ClickSpark>
        <main className="overflow-x-hidden min-h-screen relative z-10">
          <CircularCursor />
          <ScrollProgressBar />
          <Navbar />
          <Landing />
          <About />
          <Experiences />
          <Skills />
          <Projects />
          <Contributions />
          <Connect />
          <Footer />
        </main>
      </ClickSpark>
    </>
  );
}
