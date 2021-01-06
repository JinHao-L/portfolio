import logo from "../logo.svg";
import React from "react";
import Section from "../components/Section";

function Intro({ id, style }) {
  return (
    <Section id={id} style={style}>
      <div>
        <header className="App-header">
          <img
            src={"https://avatars1.githubusercontent.com/u/52820430"}
            className="profile-img"
            alt="profile"
          />
          <p>Hi there, I am Jin Hao</p>
          <p>I'm a Y2 Computer Science Undergraduate at NUS</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Section>
  );
}

export default Intro;
