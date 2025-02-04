"use client";

import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
// import About from "../components/About";
// import Experience from "../components/Experience";
// import Projects from "../components/Projects";
// import Credits from "../components/Credits";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <NavBar />

      <div className="flex flex-col items-center space-y-2 w-full max-w-screen-lg">
        <Intro />
      </div>
      {/* <About />
      <Experience />
      <Projects />
      <Credits /> */}
    </div>
  );
}
