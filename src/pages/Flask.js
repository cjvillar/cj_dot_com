import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/page_layout";

function Flask() {
  return (
    <PageLayout>
      <h1>Flask page</h1>
      <p class="mb-3  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:mr-2 first-letter:float-left">
        A goal of mine is to learn the{" "}
        <a href="https://flask.palletsprojects.com/en/2.2.x/">Flask</a> web
        framework by creating a simple web app. This project launches a web app
        that allows users to create an account and then search for a rsID
        (Reference SNP cluster ID) from{" "}
        <a href="https://www.ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/LitVar/#!?query">
          LItVar.
        </a>{" "}
        I created two GitHub workflows; a python code linter and another that
        runs a simple Pytest script to check if the python code works as
        intended. There is room for more functionality but all in all I think
        its a good start.
      </p>
    </PageLayout>
  );
}

export default Flask;
