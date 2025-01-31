// components/About.js
"use client";
import { useState } from "react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

const About = () => {
  const [activeKey, setActiveKey] = useState("1");

  const one = (
    <p className=" text-colors-slate line-height">
      I am a dedicated and passionate{" "}
      <b>Web developer and a Software Engineering student</b> at
      <a
        href="http://www.aastu.edu.et/"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-colors-slate font-semibold hover:underline"
      >
        {" "}
        Addis Ababa Science and Technology University.
      </a>
      {""} and with my background in frontend web development, I bring a blend
      of technical skills and creativity to my projects. I am passionate about
      web development and I am always looking for new opportunities to learn and
      grow.
    </p>
  );

  const two = (
    <p className=" text-colors-slate line-height">
      Outside of work, I am interested in following the developments of science.
    </p>
  );

  const tech_stack = [
    "Javascript ES6+",
    "React.js",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Mantine",
    "Supabase",
    "Zustand",
  ];

  return (
    <section id="about" className="py-16">
      <FadeInSection>
        <div className="section-header mb-8">
          <h2 className="section-title text-3xl font-semibold text-colors-slate">
            / about me
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="about-description md:w-2/3 space-y-4 text-colors-slate">
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
