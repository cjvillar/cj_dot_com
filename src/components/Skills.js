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
    "Cypress",
    "Test Automation",
    "Agile/Scrum Methodologies",
    "API Testing (Postman, RESTful)",
  ];
  return (
    <section className="flex-wrap content-1 h-screen" id="Skills">
      <div className="flex flex-col items-center ">
        <div className="flex justify-start md:flex-row flex-col">
          <img
            src={WhiteBackSlash}
            alt="logo img"
            className="skill-image invisible md:visible max-md:translate-x-20"
          />

          <div className="d-col-9 t-col-6 m-col-12">
            <h2 className="text-left">Skills</h2>
            <p className="grey-p text-left">
              Here is a more comprehensive list of all my skills. Projects and
              references are available upon request.
            </p>
            <div className="flex flex-wrap -mx-2 md:flex-col md:flex-wrap md:mx-0 md:space-y-2 lg:flex-nowrap lg:mx-0 lg:space-y-0 lg:space-x-2">
              {mySkills.map((skill, index) => (
                <div className="flex flex-col-5 justify-start">
                  <span
                    key={index}
                    className="relative border-solid rounded-md skillBox"
                  >
                    <p>{skill}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
