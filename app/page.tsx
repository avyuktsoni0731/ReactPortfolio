import Main from "./components/Main";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ScrollProgressBar from "./components/ProgressBar";
import CursorGlow from "./components/CursorGlow";
import "./static/App.css";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <CursorGlow />
        <ScrollProgressBar />
        <Navbar />
        <Main />
        <About />
      </main>
    </>
  );
}
