import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavbarStyles.css";

function Navbar() {
  const [nav] = useState(false);

  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>ROMANIA</h2>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="button" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="carousel" smooth={true} duration={500}>
            Touristic Places
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            History
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
