import { Component } from "react";
import { AboutSection, Text, Image, Stats, StatBox } from "./styledComponent";

class About extends Component {
  render() {
    return (
      <AboutSection id="about">
        <Image src="/laptop.jpg" alt="Coding" />
        <Text>
          <h2>About Me</h2>
          <p>
            I'm a passionate full-stack developer with over 3 years of
            experience building web applications. I specialize in React and
            Node.js and enjoy working with teams to create meaningful products.
          </p>
          <Stats>
            <StatBox>
              <h3>25+</h3>
              <p>Projects Completed</p>
            </StatBox>
            <StatBox>
              <h3>3+</h3>
              <p>Years Experience</p>
            </StatBox>
          </Stats>
        </Text>
      </AboutSection>
    );
  }
}

export default About;
