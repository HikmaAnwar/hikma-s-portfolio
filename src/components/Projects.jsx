"use client";
import React, { useState } from "react";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

const spotlightProjects = {
  "Bopti fits": {
    title: "Bopti fits fits",
    desc: "Bopti Fits is a virtual wardrobe styling platform designed to offer personalized fashion recommendations and outfit planning services.",
    techStack: "Next.js, Tailwind CSS",
    link: "https://github.com/HikmaAnwar/boptii-fitss",
    open: "https://boptii-fitss.vercel.app/",
    image: "/assets/boptifits.jpg",
  },
  Skillwave: {
    title: "skillwave",
    desc: "Skillwave is an educational platform that gives a courses like programming, Video editing and other design related courses based on institutions mainly for university students.",
    techStack: "Next.js, Tailwind CSS",
    link: "https://github.com/gazijarin/truth",
    open: "https://skillwave-frontend.vercel.app/",
    image: "/assets/skillwave.jpg",
  },

  Netview: {
    title: "Netview",
    desc: "Netview Movie Streaming is a platform that offers a wide range of movies and TV shows.",
    techStack: "Javascript",
    link: "https://github.com/HikmaAnwar/netview-movie-streaming",
    open: "https://netview-movie-streaming.vercel.app/",
    image: "/assets/netview.jpg",
  },

  lifekit: {
    title: "lifekit",
    desc: "Simple and conveys a comprehensive toolkit for managing different aspects of life.",
    techStack: "next.js, mantine, supabase",
    link: "https://github.com/HikmaAnwar/LifeKit",
    open: "https://life-kit-gamma.vercel.app/",
    image: "/assets/lifekit.jpg",
  },

  "minim-url": {
    title: "minim",
    desc: "A simple and efficient link shortener.",
    techStack: "Next.js, typescript",
    link: "https://github.com/HikmaAnwar/minim-url",
    open: "https://minim-url.vercel.app",
    image: "/assets/minim.jpg",
  },
};

const projects = {
  "Bopti fits": {
    desc: "Bopti Fits is a virtual wardrobe styling platform designed to offer personalized fashion recommendations and outfit planning services.",
    techStack: "Next.js, Tailwind CSS",
    link: "https://github.com/HikmaAnwar/boptii-fitss",
    open: "https://boptii-fitss.vercel.app/",
  },
  Skillwave: {
    title: "skillwave",
    desc: "Skillwave is an educational platform that gives a courses like programming, Video editing and other design related courses based on institutions mainly for university students.",
    techStack: "Next.js, Tailwind CSS",
    link: "https://github.com/gazijarin/truth",
    open: "https://skillwave-frontend.vercel.app/",
    image: "/assets/skillwave.jpg",
  },
  lifekit: {
    desc: "Simple and conveys a comprehensive toolkit for managing different aspects of life.",
    techStack: "next.js, mantine, supabase",
    link: "https://github.com/HikmaAnwar/LifeKit",
    open: "https://life-kit-gamma.vercel.app/",
  },
  "minim-url": {
    desc: "A simple and efficient link shortener.",
    techStack: "Next.js, typescript",
    link: "https://github.com/HikmaAnwar/minim-url",
    open: "https://minim-url.vercel.app",
  },
  "Simple Design": {
    desc: "A simple design.",
    techStack: "React",
    link: "https://github.com/HikmaAnwar/simple-react-design",
    open: "https://simple-react-design-eight.vercel.app/",
  },
};

const Projects = () => {
  const [activeKey, setActiveKey] = useState(0);

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <div id="projects" className="max-w-screen-lg mx-auto pt-24 min-h-[50vh] ">
      <div className="mb-8 section-header ">
        <span className="text-3xl font-semibold section-title text-colors-slate">
          / pet projects
        </span>
      </div>

      <Carousel
        activeIndex={activeKey}
        onSelect={handleSelect}
        className="max-w-screen-lg pb-12 mx-auto"
      >
        {Object.keys(spotlightProjects).map((key) => (
          <Carousel.Item key={key} className="shadow-lg rounded-2xl">
            <Image
              className="object-contain opacity-90 rounded-3xl"
              src={spotlightProjects[key].image}
              alt={key}
              width={1000}
              height={1000}
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
                <div className="flex justify-center mt-4 text-colors-greenBright">
                  <ExternalLinks
                    githubLink={spotlightProjects[key].link}
                    openLink={spotlightProjects[key].open}
                  />
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Object.keys(projects).map((key, i) => (
          <FadeInSection delay={`${i + 1}00ms`} key={key}>
            <div className="p-6 transition-transform transform bg-gray-800 rounded-lg hover:shadow-md hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4 text-colors-greenBright">
                <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                <ExternalLinks
                  githubLink={projects[key].link}
                  openLink={projects[key].open}
                />
              </div>
              <h4 className="mb-2 text-xl font-bold text-colors-slate">
                {key}
              </h4>
              <p className="mb-4 text-colors-slate line-clamp-3">
                {projects[key].desc}
              </p>
              <p className="text-sm font-medium text-colors-greenBright">
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
