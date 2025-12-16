// components/About.js
"use client";
import { useState } from "react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

const About = () => {
  const [activeKey, setActiveKey] = useState("1");

  const one = (
    <p className=" text-colors-slate line-height">
      I am a {" "}
      <b>Frontend developer and a Software Engineer </b> at
      <a
        href="https://matrix.et/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-colors-slate hover:underline"
      >
        {" "}
        Matrix Technology PLC
      </a>
      {""} and with my background in frontend development, I bring a blend
      of technical skills and creativity to my projects. I am passionate about
      system development and I am always looking for new opportunities to learn and
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
    "postgresql",
    "Golang",

  ];

  return (
    <section id="about" className="py-16">
      <FadeInSection>
        <div className="mb-8 section-header">
          <h2 className="text-3xl font-semibold section-title text-colors-slate">
            / about me
          </h2>
        </div>

        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="items-center mx-auto my-8 about-image md:hidden">
            <Image
              alt="Hikma Anwar"
              src="/assets/me.jpg"
              width={250}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4 about-description md:w-2/3 text-colors-slate">
            <div>{one}</div>

            <p className="mt-4 text-colors-slate">
              Here are some technologies I have been working with:
            </p>

            <ul className="grid grid-cols-2 gap-2 pl-4 list-disc list-inside text-colors-greenBright">
              {tech_stack.map((tech_item, i) => (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <li className="hover:text-greenBright">{tech_item}</li>
                </FadeInSection>
              ))}
            </ul>

            <div>{two}</div>
          </div>

          <div className="hidden md:block md:mt-0 md:ml-12">
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
