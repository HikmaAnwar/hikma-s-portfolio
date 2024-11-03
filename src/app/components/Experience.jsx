// components/Experience.js
"use client";

import React, { useState } from "react";
import JobList from "./JobList";
import FadeInSection from "./FadeInSection";

const Experience = () => {
  const [activeKey, setActiveKey] = useState("1");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <div id="experience" className="py-8">
      <FadeInSection>
        <div className="section-header mb-4">
          <span className="section-title text-xl font-semibold text-gray-200">
            / experience
          </span>
        </div>
        <JobList activeKey={activeKey} onSelect={handleSelect} />
      </FadeInSection>
    </div>
  );
};

export default Experience;
