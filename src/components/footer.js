import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h3>Connect:</h3>
        <a 
          href="https://www.linkedin.com/in/cjvillarreal-bay-area/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          <FaLinkedin size={30} />
        </a>
     
        <a
          href="https://github.com/cjvillar"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          <FaGithubSquare size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
