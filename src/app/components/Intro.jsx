"use client";
import React, { useEffect, useState } from "react";
import { EmailRounded } from "@mui/icons-material";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";
import Link from "next/link";

const Intro = () => {
  const [text, setText] = useState("");
  const fullText = "hi, hikma here."; // Text to be typed out

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(intervalId); // Stop when text is fully typed
    }, 120); // Typing speed in milliseconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [fullText]);

  return (
    <div className="relative flex flex-col items-center text-center inset-1 z-0 mx-auto max-w-5xl px-4">
      <div>
        <FractalTree />
      </div>
      <div>
        {" "}
        <h1 className="text-white  text-3xl md:text-2xl lg:text-7xl font-bold font-sans">
          {text.split(" ").map((word, idx) => (
            <span key={idx}>
              {word === "hikma" ? (
                <span className="text-colors-greenBright">{word}</span>
              ) : (
                word
              )}{" "}
            </span>
          ))}
        </h1>
      </div>

      <FadeInSection delay="0.5s">
        <div className="mt-4 text-colors-slate text-6xl md:text-4xl font-light">
          I create stuff sometimes.
        </div>
        <p className="mt-4 text-colors-slate text-lg md:text-xl max-w-xl ">
          I'm a software engineer from Addis Ababa, Ethiopia. I'm fascinated by
          large-scale, high-impact products and have contributed to major
          feature launches in industry-leading services and apps.
        </p>

        <Link
          href="mailto:hikmaanwar89@gmail.com"
          className="mt-6 flex items-center justify-center space-x-4  border border-colors-greenBright px-6 py-2 rounded-lg text-lg font-bold hover:bg-colors-lightestNavy transition duration-300"
        >
          <EmailRounded fontSize="small" />
          <span>Say hi!</span>
        </Link>
      </FadeInSection>
    </div>
  );
};

export default Intro;
