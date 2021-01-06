import React from "react";
import "./css/App.css";

import Navbar from "../components/Navbar";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Education from "./Education";
import Project from "./Project";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro id={"intro-section"} style={{ paddingTop: 0 }} />
      <About
        id={"about-section"}
        style={{ backgroundColor: "#e9efea", color: "black" }}
      />
      <Experiences
        id={"experiences-section"}
        style={{ backgroundColor: "#282c34", color: "white" }}
      />
      <Education
        id={"education-section"}
        style={{ backgroundColor: "#e9efea", color: "black" }}
      />
      <Project
        id={"projects-section"}
        style={{ backgroundColor: "#282c34", color: "white" }}
      />
      <Contact
        id={"contact-section"}
        style={{ backgroundColor: "#e9efea", color: "black" }}
      />
    </div>
  );
}

export default App;
