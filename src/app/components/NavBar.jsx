// components/NavBar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  EmailRounded,
  GitHub,
  LinkedIn,
  BorderColor,
} from "@mui/icons-material";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // For hamburger icon

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-navy text-lightestSlate font-sans font-bold shadow-md z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Brand - Visible on all screens */}
        <Link href="#" className="text-xl">
          Hikma Anwar
        </Link>

        {/* Desktop Links - Hidden on small screens */}
        <div className="hidden md:flex space-x-4">
          <Link href="#intro" className="hover:text-greenBright">
            Home
          </Link>
          <Link href="#about" className="hover:text-greenBright">
            About
          </Link>
          <Link href="#experience" className="hover:text-greenBright">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-greenBright">
            Projects
          </Link>
        </div>

        {/* Social Icons - Visible on all screens */}
        <div className="hidden md:flex space-x-3 items-center">
          <Link
            href="mailto:gazijarin@gmail.com"
            aria-label="Email"
            className="hover:text-greenBright"
          >
            <EmailRounded style={{ fontSize: 20 }} />
          </Link>
          <Link
            href="https://github.com/gazijarin"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-greenBright"
          >
            <GitHub style={{ fontSize: 19 }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gazi-jarin-3644b0172/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-greenBright"
          >
            <LinkedIn style={{ fontSize: 21 }} />
          </Link>
          <Link
            href="https://medium.com/@gazijarin.ai"
            target="_blank"
            aria-label="Medium"
            className="hover:text-greenBright"
          >
            <BorderColor style={{ fontSize: 20 }} />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <XIcon className="h-6 w-6 text-lightestSlate" />
            ) : (
              <MenuIcon className="h-6 w-6 text-lightestSlate" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy text-lightestSlate px-4 py-2">
          <Link
            href="#intro"
            className="block py-2 hover:text-greenBright"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block py-2 hover:text-greenBright"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="block py-2 hover:text-greenBright"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="block py-2 hover:text-greenBright"
            onClick={toggleMenu}
          >
            Projects
          </Link>

          {/* Social Icons for Mobile */}
          <div className="flex space-x-3 mt-3">
            <Link
              href="mailto:gazijarin@gmail.com"
              aria-label="Email"
              className="hover:text-greenBright"
            >
              <EmailRounded style={{ fontSize: 20 }} />
            </Link>
            <Link
              href="https://github.com/gazijarin"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-greenBright"
            >
              <GitHub style={{ fontSize: 19 }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gazi-jarin-3644b0172/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-greenBright"
            >
              <LinkedIn style={{ fontSize: 21 }} />
            </Link>
            <Link
              href="https://medium.com/@gazijarin.ai"
              target="_blank"
              aria-label="Medium"
              className="hover:text-greenBright"
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
