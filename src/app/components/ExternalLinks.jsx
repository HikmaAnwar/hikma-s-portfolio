// src/app/components/ExternalLinks.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ExternalLinks = ({ githubLink, openLink }) => (
  <span className="external-links flex space-x-4">
    {githubLink && (
      <a
        className="github-icon"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          className="text-light-slate hover:text-colors-greenBright transition-colors"
          size={20}
        />
      </a>
    )}
    {openLink && (
      <a
        className="open-icon"
        href={openLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaExternalLinkAlt
          className="text-light-slate hover:text-colors-greenBright transition-colors"
          size={20}
        />
      </a>
    )}
  </span>
);

export default ExternalLinks;
