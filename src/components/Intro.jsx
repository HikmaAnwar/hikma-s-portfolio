// Intro.jsx
"use client";
import React, { useEffect, useState } from "react";
import { EmailRounded } from "@mui/icons-material";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

const Intro = () => {
  const [text, setText] = useState("");
  const fullText = "hi, hikma here.";

  useEffect(() => {
    let index = 0;
    let intervalId;

    const startTyping = () => {
      intervalId = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(intervalId);
      }, 120);
    };

    // Delay start to allow the tree to appear first
    const timeoutId = setTimeout(startTyping, 1500);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [fullText]);

  return (
    <div className="z-0 flex flex-col items-center w-full min-h-screen px-4 pt-0 pb-8 mx-auto text-center bg-colors-dark">
      <div className="w-full max-w-5xl mx-auto">
        <div className="w-full mx-auto bg-colors-dark">
          <FractalTree />
        </div>

        <div className="mt-6">
          <h1 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-colors-slate">
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
          <div className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-colors-slate">
            Design. Build. Improve
          </div>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-colors-slate max-w-3xl mx-auto">
            I am a software engineer from Addis Ababa, Ethiopia. I am fascinated
            by large-scale, high-impact products and my passion for technology
            drives me to continually enhance my expertise. I look forward to
            contributing to impactful projects and making a difference in the
            tech industry.
          </p>

          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 mx-auto mt-6 space-x-3 text-base sm:text-lg font-bold transition duration-300 border rounded-lg border-colors-greenBright hover:bg-black">
            <EmailRounded fontSize="small" className="text-white" />
            <span className="text-white">Say hi!</span>
          </button>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Intro;
