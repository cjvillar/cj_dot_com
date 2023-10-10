import React from "react";
import { BiLogoDjango } from "react-icons/bi";

function Django() {
  return (
    <div className="flex-wrapper h-screen flex justify-center">
      <div
        className="flex flex-wrap items-center content-1 h-screen"
        id="Projects"
      >
        <div className="flex items-center m-8">
          <BiLogoDjango size={45} className="mr-2" />
          <h2>Django</h2>
        </div>

        <div className="flex justify-start md:flex-row flex-col" id="django">
          <div class="md:w-1/2 flex items-center justify-center flex-col">
            {/* <img
            src={null}
            alt="django"
            className="small-image md:large-image lg:larger-image xl:larger-image"
          /> */}
          </div>
          <div class="md:w-1/2 flex items-center justify-center"></div>
          {/* <span className="line"></span> */}
          <div className="flex flex-col">
            <a
              className="font-bold hover-over"
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
            <a
              className="font-bold hover-over"
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
