import React from "react";
import { Element } from "react-scroll";
import About from "../pages/About";

function Section({ id, style, children }) {
  return (
    <div
      style={{ minHeight: "calc(100vh - 80px)", paddingTop: "1em", ...style }}
    >
      <Element id={id}> </Element>
      {children}
    </div>
  );
}

export default Section;
