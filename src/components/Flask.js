import React from "react";
import { BiLogoFlask } from "react-icons/bi";

function Flask() {
  return (
    <div className="flex flex-col items-center content h-screen">
      <div className="flex items-center mb-2">
        <BiLogoFlask size={45} className="mr-2" />
        <h2>Flask</h2>
      </div>

      <div className="flex justify-start md:flex-row flex-col" id="flask">
        <div class="md:w-1/2 flex items-center justify-center flex-col">
          {/* <img
            src={null}
            alt="flask"
            className="small-image md:large-image lg:larger-image xl:larger-image"
          /> */}
        </div>
        <div class="md:w-1/2 flex items-center justify-center"></div>
        <span className="line"></span>
        <div className="flex flex-col">
          <a
            className="font-bold hover-over"
            href="https://github.com/cjvillar/flask_template"
          >
            Exploring Flask <span>Click to go to GitHub repo</span>
          </a>
          <p className="p-8">
            <a href="https://flask.palletsprojects.com/en/2.2.x/">Flask</a> web
            framework by creating a simple web app. This project launches a web
            app that allows users to create an account and then search for a
            rsID (Reference SNP cluster ID) from{" "}
            <a href="https://www.ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/LitVar/#!?query">
              LItVar.
            </a>{" "}
            I created two GitHub workflows; a python code linter and another
            that runs a simple Pytest script to check if the python code works
            as intended. There is room for more functionality but all in all I
            think its a good start.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Flask;
