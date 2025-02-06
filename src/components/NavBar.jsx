"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  EmailRounded,
  GitHub,
  LinkedIn,
  BorderColor,
} from "@mui/icons-material";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full h-20 text-sm font-bold text-white border-b border-colors-dark bg-colors-dark">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link href="#" className="text-lg">
          Hikma Anwar
        </Link>

        <div className="hidden space-x-8 md:flex">
          <Link href="#intro" className=" hover:text-colors-greenBright">
            Home
          </Link>
          <Link href="#about" className="hover:text-colors-greenBright">
            About
          </Link>
          <Link href="#experience" className="hover:text-colors-greenBright">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-colors-greenBright">
            Projects
          </Link>
        </div>

        <div className="items-center hidden space-x-7 md:flex">
          <Link
            href="mailto:hikmaanwar89@gmail.com"
            aria-label="Email"
            className="hover:text-greenBright"
          >
            <EmailRounded style={{ fontSize: 20 }} />
          </Link>
          <Link
            href="https://github.com/HikmaAnwar"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-colors-greenBright"
          >
            <GitHub style={{ fontSize: 19 }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hikma-tsegaye/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-colors-greenBright"
          >
            <LinkedIn style={{ fontSize: 21 }} />
          </Link>
          <Link
            href="https://medium.com/@hikmaanwar89"
            target="_blank"
            aria-label="Medium"
            className="hover:text-colors-greenBright"
          >
            <BorderColor style={{ fontSize: 20 }} />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <XIcon className="w-6 h-6 text-colors-lightestSlate" />
            ) : (
              <MenuIcon className="w-6 h-6 text-colors-lightestSlate" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-4 py-2 md:hidden bg-colors-navy text-colors-slate">
          <Link
            href="#intro"
            className="block py-2 hover:text-colors-greenBright"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block py-2 hover:text-colors-greenBright"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="block py-2 hover:text-colors-greenBright"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="block py-2 hover:text-colors-greenBright"
            onClick={toggleMenu}
          >
            Projects
          </Link>

          <div className="flex mt-3 space-x-3">
            <Link
              href="mailto:hikmaanwar89@gmail.com"
              aria-label="Email"
              className="hover:text-colors-greenBright"
            >
              <EmailRounded style={{ fontSize: 20 }} />
            </Link>
            <Link
              href="https://github.com/HikmaAnwar"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-colors-greenBright"
            >
              <GitHub style={{ fontSize: 19 }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hikma-tsegaye/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-colors-greenBright"
            >
              <LinkedIn style={{ fontSize: 21 }} />
            </Link>
            <Link
              href="https://medium.com/@hikmaanwar89"
              target="_blank"
              aria-label="Medium"
              className="hover:text-colors-greenBright"
            >
              <BorderColor style={{ fontSize: 20 }} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
