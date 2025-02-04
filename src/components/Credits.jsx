"use client";
import React, { useState } from "react";
import FadeInSection from "./FadeInSection";

const Credits = () => {
  const [expanded] = useState(true); // expanded state, though not used here, retained in case needed

  return (
    <FadeInSection>
      <div
        id="credits"
        className="flex items-center pt-24" // equivalent to padding-top: 100px;
      >
        <div
          className="text-center w-full pb-10 text-slate-600 text-base" // equivalent to width: 100%, padding-bottom: 40px, color: var(--slate), and font-size: 16px;
          style={{ fontFamily: '"NTR", sans-serif' }} // custom font family applied via inline style
        >
          <div>Built and designed by Hikma Anwar.</div>
          <div>All rights reserved. ©</div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Credits;
