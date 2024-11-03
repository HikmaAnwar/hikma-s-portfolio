import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen  p-8 pb-20 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Ensure NavBar stays fixed at the top */}
      <NavBar />

      {/* Page content with spacing between sections */}
      <div className="flex flex-col items-center space-y-2 w-full max-w-screen-lg">
        <Intro />
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
