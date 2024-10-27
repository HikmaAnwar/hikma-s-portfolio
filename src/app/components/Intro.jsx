"use client";
import React, { useEffect, useState } from "react";
import { EmailRounded } from "@mui/icons-material";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

const Intro = () => {
  const [text, setText] = useState("");
  const fullText = "hi, Hikma here."; // Text to be typed out

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
    <div className="relative flex flex-col items-center text-center mx-auto max-w-5xl min-h-screen pt-32 mt-60 px-4">
      <FractalTree />

      <h1 className="text-colors-lightestSlate text-5xl md:text-7xl lg:text-8xl pt-32 font-bold font-sans">
        {text.split(" ").map((word, idx) => (
          <span key={idx}>
            {word === "Hikma" ? (
              <span className="text-colors-greenBright">{word}</span>
            ) : (
              word
            )}{" "}
          </span>
        ))}
      </h1>

      <FadeInSection delay="0.5s">
        <div className="mt-4 text-slate text-2xl md:text-4xl font-light">
          I create stuff sometimes.
        </div>
        <p className="mt-4 text-slate text-lg md:text-xl max-w-lg">
          I'm a software engineer from Addis Ababa, Ethiopia. I'm fascinated by
          large-scale, high-impact products and have contributed to major
          feature launches in industry-leading services and apps.
        </p>
        <a
          href="mailto:hikmaanwar89@gmail.com"
          className="mt-6 flex items-center space-x-2 border border-greenBright px-6 py-2 rounded-md text-lg font-bold hover:bg-lightestNavy transition duration-300"
        >
          <EmailRounded fontSize="small" />
          <span>Say hi!</span>
        </a>
      </FadeInSection>
    </div>
  );
};

export default Intro;
