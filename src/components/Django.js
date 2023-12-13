import React from "react";
import { BiLogoDjango } from "react-icons/bi";
import dimage from "../images/django_app_screenshot.png";
import aimage from "../images/animal_rescue.gif";

function Django() {
  return (
    <div className="flex-wrapper flex content justify-center">
      <div
        className="flex flex-wrap items-center h-[calc(100vh + 50px)] md:w-1/2 "
        
      >
        <div className="flex items-center m-2 p-4">
          <div className="rounded-full bg-gray-700 m-4">
            <BiLogoDjango size={45} className="m-2 logo-clr" />
          </div>
          <h2>Django</h2>
        </div>

        <div className="flex justify-start md:flex-row flex-col m-2 p-4">
          {/* <div class="md:w-1/2 flex items-center justify-center"></div> */}

          <div className="flex flex-col">
            <div className="m-4 project-img-card">
              <img src={dimage} alt="django" />
            </div>
            <a
              className="font-bold hover-over m-2 p-4"
              href="https://github.com/the-metadata-dog/rsid_django_project"
            >
              LitVar: A Collaborative Project.{" "}
              <span>Click to go to GitHub repo</span>
            </a>
            <p className="p-8">
              Leveraging the Power of{" "}
              <a href="https://www.djangoproject.com/">Django</a> this full
              stack web application was created with callaboration first. I
              created a GitHub organization,{" "}
              <a href="https://github.com/the-metadata-dog">
                {" "}
                The Metadata Dog.{" "}
              </a>
              Here we can create tickets and plan using{" "}
              <a href="https://github.com/orgs/the-metadata-dog/projects/1">
                {" "}
                GitHub Projects
              </a>{" "}
              and run the CI/CD pipeline with GitHub Actions. This is an
              evolving project but feel free to join in on the fun.
            </p>

            <div className="m-4 project-img-card">
              <img src={aimage} alt="django" />
            </div>
            <a
              className="font-bold hover-over m-2 p-4"
              href="https://github.com/cjvillar/Animal_Rescue"
            >
              Animal Rescue: <span>Click to go to GitHub repo</span>
            </a>
            <p className="p-8">
              In my previous role, part of my duties were to help maintain a
              React app that received genomic data from various APIs and served
              the info in a user-friendly experience. This app was super complex
              and I just had to make sure the components and their respective
              test worked with the our downstream changes. This simple project
              gave me a better understanding of how the React and Django REST
              Frameworks work together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Django;
