import React, { Component } from "react";
import { Link, animateScroll } from "react-scroll";

import "./css/Navbar.css";

const SCROLL_OFFSET = -90;

function scrollToTop() {
  animateScroll.scrollToTop({ duration: 500, smooth: true });
}

function Navbar(props) {
  return (
    <nav className={"nav"} id={"navbar"}>
      <div className={"nav-content"}>
        <ul className={"nav-items"}>
          <li className={"nav-item"} onClick={scrollToTop}>
            Home
          </li>
          <li className={"nav-item"}>
            <Link
              activeClass="active"
              to={"about-section"}
              spy={true}
              smooth={true}
              offset={SCROLL_OFFSET}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link
              activeClass="active"
              to={"experiences-section"}
              spy={true}
              smooth={true}
              offset={SCROLL_OFFSET}
              duration={500}
            >
              Experiences
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link
              activeClass="active"
              to={"projects-section"}
              spy={true}
              smooth={true}
              offset={SCROLL_OFFSET}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link
              activeClass="active"
              to={"contact-section"}
              spy={true}
              smooth={true}
              offset={SCROLL_OFFSET}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
        </ul>

        <img
          className={"nav-logo"}
          alt={"github-logo"}
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
      </div>
    </nav>
  );
}

export default Navbar;
