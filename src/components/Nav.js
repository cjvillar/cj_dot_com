import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import HolidayEmoji from "./HolidayEmoji";

const Navigation = ({ toggleGamePopup }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const handleGamePopupClick = () => {
    toggleGamePopup();
    closeMenu();
  };

  return (
    <div className="nav-header">
      <nav className="navbar">
        <button
          className="cv-logo md:ml-4"
          onClick={handleGamePopupClick}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          Christopher{" "}
          <span style={{ color: "white" }}>
            Villarreal <HolidayEmoji />{" "}
          </span>
        </button>
        <div className="hamburger" onClick={handleClick}>
          <FaBars className={`lg:hidden ${click ? "hidden" : ""}`} size={30} />
          <FaTimes className={`lg:hidden ${click ? "" : "hidden"}`} size={30} />
          <ul className={click ? "nav-menu active" : "nav-menu "}>
            <li className="nav-item md:scroll-my-2">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Skills"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a href="https://www.cjvillarreal.com/ChrisCodes/">Blog</a>
            </li>
            <li className="nav-item">
              <Link
                to="Connect"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
