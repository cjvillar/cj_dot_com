import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import cv from "../images/name_logo.svg";
import { Link } from "react-scroll";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="nav-header">
      <nav className="navbar">
        <img src={cv} width={400} height={400} alt="cv logo img" />
        <div className="hamburger" onClick={handleClick}>
          <FaBars
            className={` md lg:hidden ${click ? "hidden" : ""}`}
            size={30}
          />
          <FaTimes
            className={`md lg:hidden ${click ? "" : "hidden"}`}
            size={30}
          />
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={{ top: -200, bottom: -300 }}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="react"
                spy={true}
                smooth={true}
                offset={-210}
                duration={500}
                onClick={closeMenu}
              >
                React/Next.js
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="django"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={closeMenu}
              >
                Django
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="flask"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={closeMenu}
              >
                Flask
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="unity"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={closeMenu}
              >
                Unity
              </Link>
            </li>
            <li className="nav-item">
              <a href="https://www.cjvillarreal.com/ChrisCodes/">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
