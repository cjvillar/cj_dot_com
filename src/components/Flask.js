import React from "react";
import { BiLogoFlask } from "react-icons/bi";
import flaskappimg from "../images/flask_app.png";

function Flask() {
  return (
    <div className="flex-wrapper flex content-1 justify-center">
      <div className="items-center md:w-1/2 ">
        <div className="flex items-center m-2 p-4">
          <div className="rounded-full bg-gray-700 m-4">
            <BiLogoFlask size={45} className="m-2 logo-clr" />
          </div>
          <h2>Flask</h2>
        </div>
        <div
          className="flex justify-start md:flex-row flex-col  m-2 p-4"
          id="flask"
        >
          <div className="flex flex-col">
            <div className="m-4 project-img-card">
              <img src={flaskappimg} alt="app view" />
            </div>

            <div className="flex flex-col">
              <a
                className="font-bold hover-over m-2 p-4"
                href="https://github.com/cjvillar/flask_template"
              >
                Flask <span>Click to go to GitHub repo</span>
              </a>
              <p className="p-4">
                This project explores the{" "}
                <a href="https://flask.palletsprojects.com/en/2.2.x/">Flask</a>{" "}
                micro web framework by creating a simple web app. Users create
                an account and then search for a rsID (Reference SNP cluster ID)
                from{" "}
                <a href="https://www.ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/LitVar/#!?query">
                  LItVar.
                </a>{" "}
                to receive information on their variant. I created two GitHub
                workflows; a python code linter and another that runs a simple
                Pytest script to check if the python code works as intended.
                There is room for more functionality but all in all I think its
                a good start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flask;
