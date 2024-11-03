// src/app/components/ExternalLinks.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ExternalLinks = ({ githubLink, openLink }) => (
  <span className="external-links">
    <a className="github-icon" href={githubLink}>
      <FaGithub className="text-light-slate" size={20} />
    </a>
    {openLink && (
      <a className="open-icon" href={openLink}>
        <FaExternalLinkAlt className="text-light-slate" size={20} />
      </a>
    )}
  </span>
);

export default ExternalLinks;
