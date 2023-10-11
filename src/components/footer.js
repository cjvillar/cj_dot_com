import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import backSlash from "../images/Group 80@2x.png";

const Footer = () => {
  return (
    <div className="flex-wrapper h-auto flex justify-center" id="Connect">
      <div className="mb-5 flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-left ">
          <h2 className="text-left">Connect</h2>
          <p className="grey-p text-left">
            I’m open to new projects and collaborations, feel free to connect
            with me on social or drop me a line!
          </p>
          <div className="mt-8">
            <button className="contact-button">
              <a
                href="https://www.linkedin.com/in/cjvillarreal-bay-area/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <AiFillLinkedin size={50} color=" #ffffff" />
              </a>
            </button>
            <span className="m-2"></span>
            <button className="contact-button">
              <a
                href="https://github.com/cjvillar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <AiFillGithub size={50} color=" #ffffff" />
              </a>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <img
            src={backSlash}
            alt="logo img"
            className="w-30 h-60 mx-auto relative invisible md:visible"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
