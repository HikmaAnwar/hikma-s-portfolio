//components/JobList.jsx
"use client";
import React, { useState } from "react";
import FadeInSection from "./FadeInSection";

const JobList = () => {
  const [value, setValue] = useState(0);

  const experienceItems = {
    "Matrix Technology": {
      jobTitle: "Junior Frontend Developer @",
      duration: "JUL 2025 - Present",
      desc: [
        "Collaborated with cross-functional teams to develop and optimize ERP system.",
        "Developed and maintained AI Chatbot offering customer support, chat management, and ticketing system.",
        "Utilized Next.js for server-side rendering to improve performance and scalability of all the platforms.",
        "Developed and maintained the companies website.",
      ],
    },
    "Dynamic Technologies": {
      jobTitle: "Web Developer @",
      duration: "JUL 2024 - Jan 2025",
      desc: [
        "Collaborated with cross-functional teams to develop and optimize innovative solutions for the Skillwave platform.",
        "Developed and maintained Skillwave, an online learning platform offering programming, video editing, and design courses for university students.",
        "Utilized Next.js for server-side rendering to improve performance and scalability of the platform.",
        "Implemented Tailwind CSS to create a responsive, scalable, and customizable UI, enhancing the overall user experience.",
      ],
    },
    MoCreatives: {
      jobTitle: "Web Developer Intern @",
      duration: "Feb 2025 - Sep 2025",
      desc: [
        "Collaborating with the development team to build and maintain websites for the company using next.js, mantine ui and typescript.",
        "Optimizing website performance through image compression and code refactoring.",
        "Api integration with the backend using node.js and express.",
      ],
    },
    Freelancer: {
      jobTitle: "Freelance Frontend Developer",
      duration: " Jun 2024 - Present",
      desc: [
        "Develope and maintaines websites for clients using react, next,js, mantine and typescript.",
      ],
    },
  };

  const handleChange = (index) => {
    setValue(index);
  };

  return (
    <div className="flex flex-col p-6 md:flex-row">
      <div className="pr-4 border-r border-gray-600 md:w-1/4">
        {Object.keys(experienceItems).map((key, i) => (
          <button
            key={i}
            onClick={() => handleChange(i)}
            className={`block py-2 text-left w-full transition-all ${value === i
              ? "text-colors-greenBright font-semibold"
              : "text-colors-slate"
              }`}
          >
            &gt; {key}
          </button>
        ))}
      </div>
      <div className="md:pl-4 mt-4 md:w-3/4 md:mt-0">
        {Object.keys(experienceItems).map((key, i) => (
          <div
            key={i}
            className={`${value === i ? "block" : "hidden"} transition-opacity`}
          >
            <span className="block text-lg font-semibold text-colors-slate">
              {experienceItems[key].jobTitle} {key}
            </span>
            <div className="mb-4 text-sm text-gray-400">
              {experienceItems[key].duration}
            </div>
            <ul className="space-y-2 list-disc list-inside text-colors-slate">
              {experienceItems[key].desc.map((descItem, idx) => (
                <FadeInSection key={idx} delay={`${idx + 1}00ms`}>
                  <li className="text-colors-slate">{descItem}</li>
                </FadeInSection>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
