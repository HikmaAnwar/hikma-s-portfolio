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
    <nav className="fixed top-0 w-full bg-gray-200 shadow-md z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="#">
          <a className="text-xl font-semibold">Gazi Jarin</a>
        </Link>
        <div className="flex space-x-4">
          <Link href="#intro">
            <a className="text-gray-700 hover:text-gray-900">Home</a>
          </Link>
          <Link href="#about">
            <a className="text-gray-700 hover:text-gray-900">About</a>
          </Link>
          <Link href="#experience">
            <a className="text-gray-700 hover:text-gray-900">Experience</a>
          </Link>
          <Link href="#projects">
            <a className="text-gray-700 hover:text-gray-900">Projects</a>
          </Link>
        </div>
        <div className="flex space-x-3 items-center">
          <Link href="mailto:gazijarin@gmail.com">
            <a aria-label="Email" className="text-gray-700 hover:text-gray-900">
              <EmailRounded style={{ fontSize: 20 }} />
            </a>
          </Link>
          <Link href="https://github.com/gazijarin" target="_blank">
            <a
              aria-label="GitHub"
              className="text-gray-700 hover:text-gray-900"
            >
              <GitHub style={{ fontSize: 19 }} />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/gazi-jarin-3644b0172/"
            target="_blank"
          >
            <a
              aria-label="LinkedIn"
              className="text-gray-700 hover:text-gray-900"
            >
              <LinkedIn style={{ fontSize: 21 }} />
            </a>
          </Link>
          <Link href="https://medium.com/@gazijarin.ai" target="_blank">
            <a
              aria-label="Medium"
              className="text-gray-700 hover:text-gray-900"
            >
              <BorderColor style={{ fontSize: 20 }} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
