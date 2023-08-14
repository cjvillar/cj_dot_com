import React from "react";
import { BiLogoDjango } from "react-icons/bi";

function Django() {
  return (
    <div className="content" id="django">
      <div className="container">
        <div className="col-2">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "8px",
            }}
          >
            <BiLogoDjango size={45} />
            <h2>Django</h2>
          </div>
          <span className="line"></span>
          <p>
            This is basically the same as my Simple Flask App but with{" "}
            <a href="https://www.djangoproject.com/">Django</a> and some added
            functionality. The main reason for this project was to promote
            collaboration. I created a GitHub organization,{" "}
            <a href="https://github.com/the-metadata-dog"> The Metadata Dog.</a>
            Here we can create tickets and plan using{" "}
            <a href="https://github.com/orgs/the-metadata-dog/projects/1">
              {" "}
              GitHub Projects
            </a>{" "}
            and run the CI/CD pipeline with GitHub Actions. This is an evolving
            project but feel free to join in on the fun.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Django;
