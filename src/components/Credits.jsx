"use client";
import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import Link from "next/link";

const Credits = () => {
  const [expanded] = useState(true);

  return (
    <FadeInSection>
      <div id="credits" className="flex items-center pt-10">
        <div
          className="w-full pb-10 text-base text-center text-white"
          style={{ fontFamily: '"NTR", sans-serif' }}
        >
          <div>
            Built and designed by
            <Link
              href="https://hikmaanwar.com"
              className="ml-2 hover:text-colors-greenBright"
            >
              Hikma Anwar.
            </Link>
          </div>
          <div>All rights reserved. ©</div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Credits;
