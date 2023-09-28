import React from "react";
import me from "../images/chris_image_2.png";
import uc from "../images/GIlogo@2x.png";
import hca from "../images/human-cell-atlas.png";
import nvt from "../images/iOXZt1.tif.svg";

function About() {
  return (
    <div className="flex flex-col items-center content">
      <div className="flex items-center mb-2">
        <h2>About</h2>
      </div>
      <div
        className="flex justify-start md:flex-row flex-col content"
        id="about"
      >
        <div class="md:w-1/2 flex items-center justify-center flex-col">
          <img
            src={me}
            alt="Person img"
            // className="sm:small-image md:small-image lg:small-image xl:small-image"
            className="about-image"
          />
        </div>

        <div class="md:w-1/2 flex items-center justify-center">
          <div className="flex flex-col">
            <p className="p-8">
              I’m a lifelong learner who gets bouts of creativity. I’ve found
              coding as one medium to express my ideas and explore; it’s always
              a challenge and I appreciate that. Professionally, I’ve been
              working as a Software Developer, and previously Tester, in the
              clinical genomics space at{" "}
              <a href="https://www.invitae.com/en">Invitae</a>. Moreover, I’ve
              worked in QA on projects such as the{" "}
              <a href="https://genome.ucsc.edu/"> UCSC Genome Browser</a>, and
              as a Data Wrangler at the{" "}
              <a href="https://data.humancellatlas.org/">Human Cell Atlas</a>{" "}
              and{" "}
              <a href="https://cirm.ucsc.edu/">
                California Institutes of health
              </a>
              . I created this website to hopefully inspire others to make
              things. Feel free to connect on{" "}
              <a href="https://github.com/cjvillar">GitHub</a>
            </p>

            <div class="flex-grid">
              <div className="d-col-12 t-col-4 m-col-4">
                <img src={nvt} alt="Person img" className="logo-img" />
              </div>
              <div class="d-col-12 t-col-4 m-col-4">
                <img src={hca} alt="Person img" className="logo-img" />
              </div>
              <div className="d-col-12 t-col-4 m-col-4">
                <img src={uc} alt="Person img" className="logo-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
