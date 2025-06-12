import { Component } from "react";
import {
  HeroSection,
  HeroText,
  Highlight,
  Subtitle,
  Buttons,
  ButtonPrimary,
  ButtonSecondary,
  ProfileImage,
  SocialIcons,
  SocialIconLink,
} from "./styledComponent";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

class Hero extends Component {
  render() {
    return (
      <HeroSection>
        <HeroText>
          <h1>
            Hi, I'm <Highlight>Alex Johnson</Highlight>
          </h1>
          <Subtitle>Full Stack Developer</Subtitle>
          <p>
            Passionate about creating beautiful, functional web applications
            that solve real-world problems and deliver exceptional user
            experiences.
          </p>
          <Buttons>
            <ButtonPrimary>Get In Touch</ButtonPrimary>
            <ButtonSecondary>View Work</ButtonSecondary>
          </Buttons>
          <SocialIcons>
            <SocialIconLink
              href="https://github.com/"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href="https://linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="https://twitter.com/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="mailto:alex@example.com" aria-label="Email">
              <FaEnvelope />
            </SocialIconLink>
          </SocialIcons>
        </HeroText>
        <ProfileImage src="/profile.jpg" alt="Alex Johnson" />
      </HeroSection>
    );
  }
}

export default Hero;
