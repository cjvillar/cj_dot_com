

import React, { useState } from "react";
import Django from "./Django";
import Flask from "./Flask";
import ReactPage from "./React";
import Unity from "./Unity";

const Projects = () => {
  const [activeComponent, setActiveComponent] = useState("ReactPage");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "ReactPage":
        return <ReactPage />;
      case "Django":
        return <Django />;
      case "Flask":
        return <Flask />;
      case "Unity":
        return <Unity />;
      default:
        return null;
    }
  };

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <section className="flex-wrapper relative h-screen" id="Projects">
      <div className="flex-grid ">
        <div className="d-col-3 t-col-6 m-col-12">
        </div>
        <div className="d-col-9 t-col-6 m-col-12">
          <div className="flex-grid">
            <div className="d-col-12 t-col-12 m-col-12">
              <div className="component-container">{renderActiveComponent()}</div>
              <div className="component-buttons">
                <button
                  onClick={() => handleComponentChange("ReactPage")}
                  className={activeComponent === "ReactPage" ? "active" : ""}
                >
                  React
                </button>
                <button
                  onClick={() => handleComponentChange("Django")}
                  className={activeComponent === "Django" ? "active" : ""}
                >
                  Django
                </button>
                <button
                  onClick={() => handleComponentChange("Flask")}
                  className={activeComponent === "Flask" ? "active" : ""}
                >
                  Flask
                </button>
                <button
                  onClick={() => handleComponentChange("Unity")}
                  className={activeComponent === "Unity" ? "active" : ""}
                >
                  Unity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

