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
    <section className="flex-wrapper overflow-y-auto">
      <div className="flex-grid relative h-screen" id="Skills">
        <div className="d-col-3 t-col-6 m-col-12">
          <img
            src={WhiteBackSlash}
            alt="logo img"
            className="skill-image invisible md:visible max-md:translate-x-20"
          />
        </div>
        <div className="d-col-9 t-col-6 m-col-12">
          <h2 className="text-left">Skills</h2>
          <p className="grey-p text-left">
            Here is a more comprehensive list of all my skills. Projects and
            references are available upon request.
          </p>
          {/* <div className="d-col-12 t-col-12 m-col-8"> */}
          <div className="m-2 md:mr-8">
            {mySkills.map((skill, index) => (
              <span key={index} className="skillBox">
                <p>{skill}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
