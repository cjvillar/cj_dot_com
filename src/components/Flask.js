import React from "react";
import { BiLogoFlask } from "react-icons/bi";
import flaskappimg from "../images/flask_app.png";

function Flask() {
  return (
    <div className="flex flex-col items-center content h-auto">
      <div className="flex items-center mb-2">
        <div className="rounded-full bg-gray-700 m-4">
          <BiLogoFlask size={45} className="m-2 logo-clr" />
        </div>
        <h2>Flask</h2>
      </div>

      <div className="flex justify-start md:flex-row flex-col" id="flask">
        <div class="md:w-1/2 flex items-center justify-center flex-col">
          <div className="m-4 project-img-card">
            <img src={flaskappimg} alt="app view" />
          </div>
        </div>
        <div class="md:w-1/2 flex items-center justify-center"></div>
        <span className="line"></span>
        <div className="flex flex-col">
          <a
            className="font-bold hover-over"
            href="https://github.com/cjvillar/flask_template"
          >
            Flask <span>Click to go to GitHub repo</span>
          </a>
          <p className="p-8">
            This project explores the{" "}
            <a href="https://flask.palletsprojects.com/en/2.2.x/">Flask</a>{" "}
            micro web framework by creating a simple web app. Users create an
            account and then search for a rsID (Reference SNP cluster ID) from{" "}
            <a href="https://www.ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/LitVar/#!?query">
              LItVar.
            </a>{" "}
            to receive information on their variant. I created two GitHub
            workflows; a python code linter and another that runs a simple
            Pytest script to check if the python code works as intended. There
            is room for more functionality but all in all I think its a good
            start.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Flask;
