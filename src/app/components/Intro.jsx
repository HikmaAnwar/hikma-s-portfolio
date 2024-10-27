// components/Intro.js
import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { EmailRounded } from "@mui/icons-material";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

const Intro = () => {
  return (
    <div className="relative flex flex-col items-center text-center mx-auto max-w-5xl min-h-screen py-20 px-4">
      <FractalTree />

      <Typist avgTypingDelay={120}>
        <span className="text-lightestSlate text-5xl md:text-7xl lg:text-8xl font-bold font-sans">
          {"hi, "}
          <span className="text-greenBright">{"gazi"}</span>
          {" here."}
        </span>
      </Typist>

      <FadeInSection delay="0.5s">
        <div className="mt-4 text-slate text-2xl md:text-4xl font-light">
          I create stuff sometimes.
        </div>
        <p className="mt-4 text-slate text-lg md:text-xl max-w-lg">
          I'm a software engineer from Toronto, Canada. I'm fascinated by
          large-scale, high-impact products and have contributed to major
          feature launches in industry-leading services and apps with 100M+
          installs.
        </p>
        <a
          href="mailto:gazijarin@gmail.com"
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
