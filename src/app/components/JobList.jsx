import React from "react";

const JobList = ({ activeKey, onSelect }) => {
  const experienceItems = {
    "Dynamic Technologies": {
      jobTitle: "Web Development Intern @",
      duration: "JUL 2024 - OCT 2024",
      desc: [
        "Collaborates with cross-functional teams to develop and optimize innovative solutions.",
        "Develops and maintains the Skillwave web application, an online learning platform using Next.js and Tailwind CSS.",
      ],
    },
    Wattpad: {
      jobTitle: "Associate Engineer @",
      duration: "MAY 2020 - APR 2021",
      desc: [
        "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
        "Iteratively built web experiences for 80 million users across high-traffic pages.",
        "Collaborated with senior engineers and product management following best practices for the full software development lifecycle.",
      ],
    },
  };

  return (
    <div className="flex flex-col sm:flex-row p-6">
      <div className="sm:w-1/4 border-r border-gray-600 pr-4">
        {Object.keys(experienceItems).map((key, i) => (
          <button
            key={i}
            onClick={() => onSelect(key)}
            className={`block py-2 text-left w-full transition-all ${
              activeKey === key
                ? "border-b-2 border-colors-greenBright font-semibold"
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
            className={`${
              activeKey === key ? "block" : "hidden"
            } transition-opacity`}
          >
            <span className="block text-lg font-semibold text-colors-slate">
              {experienceItems[key].jobTitle} {key}
            </span>
            <div className="text-sm text-gray-400 mb-4">
              {experienceItems[key].duration}
            </div>
            <ul className="list-disc list-inside text-colors-slate space-y-2">
              {experienceItems[key].desc.map((descItem, idx) => (
                <li key={idx} className="text-colors-slate">
                  {descItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
