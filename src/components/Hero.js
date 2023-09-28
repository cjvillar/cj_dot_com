import React from "react";
import { Link } from "react-scroll";
import backSlash from "../images/Group 80@2x.png";

const Hero = () => {
  return (
    <section className="flex-wrapper relative h-screen inset-40 hero">
      <div className="flex-grid absolute">
        <div className="d-col-12 t-col-6 m-col-1 text-justify" id="hero">
          <h1 className="hero">
            Hi, I’m <span style={{ color: "#BE845A" }}>Chris</span>, A Software
            Developer
          </h1>
          <div className="break"></div>
          <p>
            Currently located in the San Francisco Bay Area. I love building
            interactive digital experiences for the web. Thanks for stopping by!
          </p>
          <Link to="Connect" smooth={true} duration={500}>
            <button className="custom-button">Let’s get in touch!</button>
          </Link>
        </div>

        <div className="d-col-12 t-col-12 m-col-1 ">
          <img src={backSlash} alt="logo img" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
