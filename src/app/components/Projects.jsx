"use client";
import React, { useState } from "react";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";

import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

const spotlightProjects = {
  Skillwave: {
    title: "skillwave",
    desc: "Skillwave is an educational platform that gives a courses like programming, Video editing and other design related courses based on institutions mainly for university students.",
    techStack: "Next.js, Tailwind CSS",
    link: "https://github.com/gazijarin/truth",
    open: "https://skillwave-frontend.vercel.app/",
    image: "/assets/skillwave.jpg",
  },
  "Bopti fits": {
    title: "Bopti fits",
    desc: "Bopti Fits is a virtual wardrobe styling platform designed to offer personalized fashion recommendations and outfit planning services.",
    techStack: "Next.js, Tailwind CSS",
    link: "https://github.com/HikmaAnwar/boptii-fitss",
    open: "https://boptii-fitss.vercel.app/",
    image: "/assets/boptifits.jpg",
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
      <div className="section-header mb-8">
        <span className="section-title text-3xl font-semibold text-colors-slate">
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
              <Carousel.Caption className="text-center text-colors-slate">
                <h3 className="text-3xl font-bold">
                  {spotlightProjects[key].title}
                </h3>
                <p className="text-lg">{spotlightProjects[key].desc}</p>
                <p className="text-sm font-bold text-colors-greenBright">
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
              <div className="flex items-center justify-between mb-4 text-colors-greenBright">
                <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                <ExternalLinks
                  githubLink={projects[key].link}
                  openLink={projects[key].open}
                />
              </div>
              <h4 className="text-xl font-bold text-colors-slate mb-2">
                {key}
              </h4>
              <p className="text-colors-slate mb-4">{projects[key].desc}</p>
              <p className="text-sm text-colors-greenBright font-medium">
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
