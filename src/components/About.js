import React from "react";
import me from "../images/me.png";

function About() {
  const skills = [
    "Python",
    "Django",
    "Flask",
    "Javascript",
    "React",
    "Next",
    "HTML",
    "CSS",
    "SQL",
    "Unix",
    "Bash Shell",
    "Git",
    "GitHub",
    "Git Actions",
    "CI/CD",
    "Docker",
    "Agile/Scrum Methodologies",
    "Test Automation",
    "Cypress",
    "API Testing (Postman, RESTful)",
  ];
  return (
    <div className="flex flex-col items-center content">
      <div className="flex items-center mb-2">
        <h2 class="font-bold">About</h2>
      </div>

      <span class="w-16 h-1 line"></span>
      <div
        className="flex justify-start md:flex-row flex-col content"
        id="about"
      >
        <div class="md:w-1/2 flex items-center justify-center flex-col">
          <img
            src={me}
            alt="Person img"
            className="small-image md:large-image lg:larger-image xl:larger-image"
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
            <p className="p-8">
              <h3 class="font-bold">Skills:</h3>
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block border border-gray-400 p-2 m-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
