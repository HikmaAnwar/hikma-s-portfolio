"use client";
import React, { useState } from "react";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";

import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

const spotlightProjects = {
  "No Man's Land": {
    title: "no man's land",
    desc: "A third-person survival-mode game where you battle against time and space to return to Earth.",
    techStack: "C# (UNITY)",
    link: "https://github.com/slakh96/no-mans-land",
    open: "https://gazijarin.itch.io/no-mans-land",
    image: "/assets/nomansland.png",
  },
  Truth: {
    title: "truth",
    desc: "A three.js simulation of the planet system revolving around a monolith.",
    techStack: "JAVASCRIPT (THREE.JS)",
    link: "https://github.com/gazijarin/truth",
    open: "https://gazijarin.github.io/Truth/",
    image: "/assets/truth.png",
  },
  "Tall Tales": {
    title: "tall tales",
    desc: "A multiplayer storytelling web game allowing concurrent gameplay via sockets.",
    techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
    link: "https://github.com/gazijarin/TallTales",
    open: "https://talltales.herokuapp.com/",
    image: "/assets/talltales.png",
  },
  Portfolio: {
    title: "portfolio.js",
    desc: "A small JS library for clear and succinct data presentation.",
    techStack: "NODE.JS (EXPRESS.JS)",
    link: "https://github.com/gazijarin/Portfolio.js",
    open: "https://afternoon-ocean-92382.herokuapp.com/",
    image: "/assets/portfolio.png",
  },
};

const projects = {
  "TDSB Homework Management Interface": {
    desc: "An application for Toronto District School Board with a Flask backend and Vue frontend.",
    techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
    link: "https://github.com/gazijarin/TDSBHomeworkManagement",
    open: "https://tdsb-app.herokuapp.com/",
  },
  "Adam A.I.": {
    desc: "A self-learning A.I. that learns to traverse complex mazes using the genetic algorithm.",
    techStack: "Javascript, HTML/CSS",
    link: "https://github.com/gazijarin/adamai",
    open: "https://gazijarin.github.io/AdamAI/",
  },
};

const Projects = () => {
  const [activeKey, setActiveKey] = useState(0);

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <div id="projects" className="max-w-screen-lg mx-auto pt-24 min-h-[50vh]">
      <div className="text-center mb-8">
        <span className="text-lg font-semibold text-green-400">
          / pet projects
        </span>
      </div>

      <Carousel
        activeIndex={activeKey}
        onSelect={handleSelect}
        className="max-w-screen-lg mx-auto pb-12"
      >
        {Object.keys(spotlightProjects).map((key) => (
          <Carousel.Item key={key} className="rounded-2xl shadow-lg">
            <img
              className="w-full h-[500px] object-contain opacity-50"
              src={spotlightProjects[key].image}
              alt={key}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
              <Carousel.Caption className="text-center text-gray-200">
                <h3 className="text-3xl font-bold">
                  {spotlightProjects[key].title}
                </h3>
                <p className="text-lg">{spotlightProjects[key].desc}</p>
                <p className="text-sm font-semibold text-green-400">
                  {spotlightProjects[key].techStack}
                </p>
                <ExternalLinks
                  githubLink={spotlightProjects[key].link}
                  openLink={spotlightProjects[key].open}
                />
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Object.keys(projects).map((key, i) => (
          <FadeInSection delay={`${i + 1}00ms`} key={key}>
            <div className="p-6 bg-gray-800 rounded-lg hover:shadow-md transition-transform transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4 text-green-400">
                <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                <ExternalLinks
                  githubLink={projects[key].link}
                  openLink={projects[key].open}
                />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{key}</h4>
              <p className="text-gray-400 mb-4">{projects[key].desc}</p>
              <p className="text-sm text-green-400 font-medium">
                {projects[key].techStack}
              </p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Projects;