import React from "react";
import { Link } from "react-scroll";
import backSlash from "../images/Group 80@2x.png";

const Hero = () => {
  return (
    <section className="flex-wrapper h-screen translate-y-20 lg:translate-y-0 hero inset-20 hero-large">
      <div className="flex-grid m-4 md:w-1/2 lg:w-1/2 lg:m-80">
        <div className="d-col-12 t-col-6 m-col-2 text-left" id="hero">
          <h1 className="hero">
            Hi, I’m <span style={{ color: "#BE845A" }}>Chris</span>, a Software
            Developer.
          </h1>
          <div className="break"></div>
          <p className="max-sm:tracking-tighter">
            I love to learn, tinker, and create. I built this site to document
            my journey and to inspire. Check out my{" "}
            <a href="https://www.cjvillarreal.com/ChrisCodes/">
              <em> blog</em>{" "}
            </a>{" "}
            for more. Thanks for stopping by!
          </p>
          <Link to="Connect" smooth={true} duration={500}>
            <button className="custom-button">Let’s get in touch!</button>
          </Link>
        </div>
        <div className="d-col-12 t-col-12 m-col-2">
          <img src={backSlash} alt="logo img" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
