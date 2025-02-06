"use client";

import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Credits from "../components/Credits";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen  p-8 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-colors-dark">
      <NavBar />

      <div className="flex flex-col items-center w-full max-w-screen-lg space-y-14 ">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Credits />
      </div>
    </div>
  );
}
