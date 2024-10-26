// components/NavBar.js
import React from "react";
import Link from "next/link";
import {
  EmailRounded,
  GitHub,
  LinkedIn,
  BorderColor,
} from "@mui/icons-material";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-navy text-lightestSlate font-sans font-bold shadow-md z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Brand - Hidden on small screens */}
        <Link href="#">
          <a className="text-xl hidden md:inline">Gazi Jarin</a>
        </Link>

        {/* Nav Links - Hidden on small screens */}
        <div className="flex space-x-4 hidden md:flex">
          <Link href="#intro">
            <a className="hover:text-greenBright">Home</a>
          </Link>
          <Link href="#about">
            <a className="hover:text-greenBright">About</a>
          </Link>
          <Link href="#experience">
            <a className="hover:text-greenBright">Experience</a>
          </Link>
          <Link href="#projects">
            <a className="hover:text-greenBright">Projects</a>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3 items-center">
          <Link href="mailto:gazijarin@gmail.com">
            <a aria-label="Email" className="hover:text-greenBright">
              <EmailRounded style={{ fontSize: 20 }} />
            </a>
          </Link>
          <Link href="https://github.com/gazijarin" target="_blank">
            <a aria-label="GitHub" className="hover:text-greenBright">
              <GitHub style={{ fontSize: 19 }} />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/gazi-jarin-3644b0172/"
            target="_blank"
          >
            <a aria-label="LinkedIn" className="hover:text-greenBright">
              <LinkedIn style={{ fontSize: 21 }} />
            </a>
          </Link>
          <Link href="https://medium.com/@gazijarin.ai" target="_blank">
            <a aria-label="Medium" className="hover:text-greenBright">
              <BorderColor style={{ fontSize: 20 }} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
