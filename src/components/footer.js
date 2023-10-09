import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import backSlash from "../images/Group 80@2x.png";

const Footer = () => {
  return (
    <footer className="flex-wrapper footer h-screen content-1" id="Connect">
      <div className="footer-container ">
        <h2>Connect</h2>

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
        <img src={backSlash} alt="logo img" className="footer-img" />
      </div>
    </footer>
  );
};

export default Footer;
