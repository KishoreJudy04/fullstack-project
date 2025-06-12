import React from "react";
import {
  AboutSection,
  AboutHeading,
  AboutText,
  AboutWrapper,
} from "./styledComponents";

const About = () => (
  <AboutSection id="about">
    <AboutWrapper>
      <AboutHeading>About Me</AboutHeading>
      <AboutText>
        Hello! I'm <b>Your Name</b>, a passionate Full Stack Developer with
        experience in building web applications using modern technologies. I
        enjoy solving real-world problems and delivering exceptional user
        experiences.
        <br />
        <br />
        My journey started with curiosity for how things work on the web, and
        since then, I've worked on several projects using React, Node.js, and
        MongoDB. I love learning new tools and collaborating with others to
        create impactful solutions.
        <br />
        <br />
        When I'm not coding, you can find me exploring new tech trends, reading,
        or working on side projects.
      </AboutText>
    </AboutWrapper>
  </AboutSection>
);

export default About;
