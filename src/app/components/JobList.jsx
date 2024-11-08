import React, { useState } from "react";
import FadeInSection from "./FadeInSection";

const JobList = () => {
  const [value, setValue] = useState(0);

  const experienceItems = {
    "Dynamic Technologies": {
      jobTitle: "Web Development Intern @",
      duration: "JUL 2024 - OCT 2024",
      desc: [
        "Collaborated with cross-functional teams to develop and optimize innovative solutions for the Skillwave platform.",
        "Developed and maintained Skillwave, an online learning platform offering programming, video editing, and design courses for university students.",
        "Utilized Next.js for server-side rendering to improve performance and scalability of the platform.",
        "Implemented Tailwind CSS to create a responsive, scalable, and customizable UI, enhancing the overall user experience.",
      ],
    },
    Wattpad: {
      jobTitle: "Associate Engineer @",
      duration: "MAY 2020 - APR 2021",
      desc: [
        "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
        "Iteratively built web experiences for 80 million users across high-traffic pages.",
        "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
      ],
    },
  };

  const handleChange = (index) => {
    setValue(index);
  };

  return (
    <div className="flex flex-col sm:flex-row p-6">
      <div className="sm:w-1/4 border-r border-gray-600 pr-4">
        {Object.keys(experienceItems).map((key, i) => (
          <button
            key={i}
            onClick={() => handleChange(i)}
            className={`block py-2 text-left w-full transition-all ${
              value === i
                ? "text-colors-greenBright font-semibold"
                : "text-colors-slate"
            }`}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="sm:w-3/4 pl-4 mt-4 sm:mt-0">
        {Object.keys(experienceItems).map((key, i) => (
          <div
            key={i}
            className={`${value === i ? "block" : "hidden"} transition-opacity`}
          >
            <span className="block text-lg font-semibold text-colors-slate">
              {experienceItems[key].jobTitle} {key}
            </span>
            <div className="text-sm text-gray-400 mb-4">
              {experienceItems[key].duration}
            </div>
            <ul className="list-disc list-inside text-colors-slate space-y-2">
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
