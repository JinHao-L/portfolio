import React from "react";
import Section from "../components/Section";

function Project({ id, style }) {
  return (
    <Section id={id} style={style}>
      <h1>My Projects</h1>
    </Section>
  );
}

export default Project;
