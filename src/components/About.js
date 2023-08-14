import React from "react";
import me from "../images/me.png";

function About() {
  return (
    <div className="content" id="about">
     
      <div className="container">
      <img
        src={me}
        alt="Person img"
        className="img-right-top w-44 h-44 ml-4 "
      />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            I’m a lifelong learner who gets bouts of creativity. I’ve found
            coding as one medium to express my ideas and explore; it’s always a
            challenge and I appreciate that. Professionally, I’ve been working
            as a Software Developer, and previously Tester, in the clinical
            genomics space at <a href="https://www.invitae.com/en">Invitae</a>.
            Moreover, I’ve worked in QA on projects such as the{" "}
            <a href="https://genome.ucsc.edu/"> UCSC Genome Browser</a>, and as
            a Data Wrangler at the{" "}
            <a href="https://data.humancellatlas.org/">Human Cell Atlas</a> and{" "}
            <a href="https://cirm.ucsc.edu/">California Institutes of health</a>
            . I created this website to hopefully inspire others to make things.
            Feel free to connect on{" "}
            <a href="https://github.com/cjvillar">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
