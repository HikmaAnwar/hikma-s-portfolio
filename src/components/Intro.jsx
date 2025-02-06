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
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(intervalId);
    }, 120);
    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <div className="z-0 flex flex-col items-center max-w-5xl mx-auto ml-0 text-center inset-1">
      <div className="mx-auto bg-colors-dark">
        <FractalTree />
      </div>
      <div>
        {" "}
        <h1 className="font-sans text-3xl font-bold text-colors-slate md:text-2xl lg:text-7xl">
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
        <div className="mt-4 text-6xl font-light text-center text-colors-slate md:text-3xl">
          Design. Build. Improve
        </div>
        <p className="max-w-xl mt-4 text-lg text-colors-slate md:text-xl ">
          I am a software engineer from Addis Ababa, Ethiopia. I&apos;m
          fascinated by large-scale, high-impact products and my passion for
          technology drives me to continually enhance my expertise. I look
          forward to contributing to impactful projects and making a difference
          in the tech industry.
        </p>

        <button className="flex items-center justify-center px-6 py-2 mx-auto mt-6 space-x-4 text-lg font-bold transition duration-300 border rounded-lg border-colors-greenBright hover:bg-black">
          <EmailRounded fontSize="small" className="text-white" />
          <span className="text-white">Say hi!</span>
        </button>
      </FadeInSection>
    </div>
  );
};

export default Intro;
