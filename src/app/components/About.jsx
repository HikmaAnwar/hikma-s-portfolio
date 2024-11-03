// components/About.js
"use client";
import { useState } from "react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

const About = () => {
  const [activeKey, setActiveKey] = useState("1");

  const one = (
    <p className=" text-colors-slate line-height">
      I am currently a <b>Software Development Engineer</b> at
      <a
        href="https://www.aboutamazon.com/"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-colors-slate hover:underline"
      >
        {" "}
        Amazon
      </a>
      , working in the AWS sector under team Route 53. At the same time, I am
      undertaking a part-time <b>Master's of Science</b> in{" "}
      <b>Software Engineering</b> at{" "}
      <a
        href="https://www.ox.ac.uk/about"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-colors-slate hover:underline"
      >
        University of Oxford
      </a>
      .
    </p>
  );

  const two = (
    <p className=" text-colors-slate line-height">
      Outside of work, I'm interested in following the developments of science.
      I also play a lot of video games. And make TikToks.
    </p>
  );

  const tech_stack = [
    "Typescript",
    "Python",
    "React.js",
    "Java",
    "Javascript ES6+",
    "C#",
  ];

  return (
    <section id="about" className="py-16">
      <FadeInSection>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-colors-slate text-lightestSlate">
            / about me
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="about-description md:w-2/3 space-y-4 text-lightestSlate">
            <div>{one}</div>

            <p className="mt-4  text-colors-slate">
              Here are some technologies I have been working with:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-colors-greenBright list-disc list-inside pl-4">
              {tech_stack.map((tech_item, i) => (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <li className="hover:text-greenBright">{tech_item}</li>
                </FadeInSection>
              ))}
            </ul>

            <div>{two}</div>
          </div>

          <div className="about-image mt-8 md:mt-0 md:ml-12">
            <Image
              alt="Hikma Anwar"
              src="/assets/me.jpg"
              width={250}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
