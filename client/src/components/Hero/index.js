import { Component } from "react";
import {
  HeroContainer,
  HeroSection,
  HeroText,
  Highlight,
  Subtitle,
  Buttons,
  ButtonPrimary,
  ButtonSecondary,
  ProfileImage,
} from "./styledComponent";

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <HeroSection>
          <HeroText>
            <h1>
              Hi, I'm <Highlight>Alex Johnson</Highlight>
            </h1>
            <Subtitle>Full Stack Developer</Subtitle>
            <p>
              Passionate about creating beautiful, functional web applications
              that solve real-world problems.
            </p>
            <Buttons>
              <ButtonPrimary>Get In Touch</ButtonPrimary>
              <ButtonSecondary>View Work</ButtonSecondary>
            </Buttons>
          </HeroText>
          <ProfileImage src="/profile.jpg" alt="Alex Johnson" />
        </HeroSection>
      </HeroContainer>
    );
  }
}

export default Hero;
