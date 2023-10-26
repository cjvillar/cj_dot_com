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
    <section className="flex-wrap h-screen content-1" id="Skills">
      {/* <div className="flex "> */}
        <div className="flex justify-start md:m-8 md:flex-row flex-col">
          <img
            src={WhiteBackSlash}
            alt="logo img"
            className="skill-image invisible md:visible max-md:translate-x-20"
          />

          <div className="d-col-12 t-col-4 m-col-4">
            <h2 className="text-left mx-5">Skills</h2>
            <p className="grey-p text-left mx-5 mb-1">
              Here is a more comprehensive list of all my skills. Projects and
              references are available upon request.
            </p>
            <div className="flex flex-wrap p-1 md:p-4 md:flex-wrap mx-4 ">
              {mySkills.map((skill, index) => (
                <div className="flex justify-start m-1">
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
      {/* </div> */}
    </section>
  );
};

export default Skills;
