import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="nav-header">
      <nav className="navbar">
        <h3 className="cv-logo">
          Christopher <span style={{ color: "white" }}>Villarreal</span>
        </h3>
        <div className="hamburger" onClick={handleClick}>
          <FaBars className={`lg:hidden ${click ? "hidden" : ""}`} size={30} />
          <FaTimes className={`lg:hidden ${click ? "" : "hidden"}`} size={30} />
          <ul className={click ? "nav-menu active" : "nav-menu "}>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-200}
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
                offset={-100}
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
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Projects
              </Link>
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
