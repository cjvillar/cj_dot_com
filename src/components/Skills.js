import React from "react";
import WhiteBackSlash from "../images/white_stripe.svg";

const Skills = () => {
  const mySkills = [
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
    <div className="flex flex-col items-center content h-screen" id="Skills">
      <div className="flex justify-start md:flex-row flex-col">
        <div class="md:w-1/2 flex items-center justify-center flex-col">
          <img src={WhiteBackSlash} alt="Person img" className="skill-image" />
        </div>

        <div class="md:w-1/2 flex items-center justify-center">
          <div className="flex flex-col">
            <p className="p-8">
              <h2 class="font-bold">Skills</h2>
              {mySkills.map((skill, index) => (
                <span key={index} className="skillBox">
                  {skill}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
