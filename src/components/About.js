import React from "react";
import me from "../images/me.png";



function About() {
  const skills = [
    "Python","Javascript", "Web Frameworks", "SQL", "Unix", "Bash Shell",
    "Git", "GitHub", "Git Actions", "Docker", "Agile/Scrum Methodologies",
    "API Testing (Postman, RESTful)", "CI/CD", "HTML", "CSS"
  ];
  return (
    <div className="flex justify-start md:flex-row flex-col content" id="about">
      <div class="md:w-1/2 flex items-center justify-center">
        <img
          src={me}
          alt="Person img"
          className="small-image md:large-image lg:larger-image"
        />
      </div>

      <div class="md:w-1/2 flex items-center justify-center flex-col">
        <h2 class="mb-2">About</h2>
        <span class="w-16 h-1 bg-black mb-4"></span>

        <p className="p-8">
          I’m a lifelong learner who gets bouts of creativity. I’ve found coding
          as one medium to express my ideas and explore; it’s always a challenge
          and I appreciate that. Professionally, I’ve been working as a Software
          Developer, and previously Tester, in the clinical genomics space at{" "}
          <a href="https://www.invitae.com/en">Invitae</a>. Moreover, I’ve
          worked in QA on projects such as the{" "}
          <a href="https://genome.ucsc.edu/"> UCSC Genome Browser</a>, and as a
          Data Wrangler at the{" "}
          <a href="https://data.humancellatlas.org/">Human Cell Atlas</a> and{" "}
          <a href="https://cirm.ucsc.edu/">California Institutes of health</a>.
          I created this website to hopefully inspire others to make things.
          Feel free to connect on{" "}
          <a href="https://github.com/cjvillar">GitHub</a>
        </p>
        <p className="p-8">
      <h3 class="font-bold" >Skills:</h3>
      {skills.map((skill, index) => (
        <span key={index} className="inline-block border border-gray-400 p-2 m-1 rounded-md">
          {skill}
        </span>
      ))}
    </p>
      </div>
    </div>
  );
}

export default About;
