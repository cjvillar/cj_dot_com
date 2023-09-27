import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex-wrapper footer relative h-screen" id="Connect">
      <div className="footer-container">
        <h3>Connect:</h3>

        <p className="grey-p">
          I’m open to new projects and collaborations, feel free to connect with
          me on social or drop me a line!
        </p>
        {/* <button className="contact-button"> */}
        <a
          href="https://www.linkedin.com/in/cjvillarreal-bay-area/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          <FaLinkedin size={80} color=" #ffffff" />
        </a>
        {/* </button> */}
        {/* <button className="contact-button"> */}
        <a
          href="https://github.com/cjvillar"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
        >
          <FaGithubSquare size={80} color=" #ffffff" />
        </a>
        {/* </button> */}
      </div>
    </div>
  );
};

export default Footer;
