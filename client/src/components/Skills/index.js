import React, { Component } from "react";
import { SkillsSection, Grid, SkillCard } from "./styledComponent";

class Skills extends Component {
  render() {
    return (
      <SkillsSection id="skills">
        <h2>Technical Skills</h2>
        <Grid>
          {[
            "React.js",
            "JavaScript",
            "HTML5",
            "Tailwind",
            "Node.js",
            "MongoDB",
            "Express.js",
          ].map((skill, index) => (
            <SkillCard key={index}>{skill}</SkillCard>
          ))}
        </Grid>
      </SkillsSection>
    );
  }
}

export default Skills;
