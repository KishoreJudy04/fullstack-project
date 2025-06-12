import {
  HeroSection,
  Overlay,
  Container,
  ContentWrapper,
  TextContent,
  MainHeading,
  AccentText,
  SubHeading,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  SocialLinks,
  SocialIcon,
  ImageWrapper,
  ProfileImage,
} from "./styledComponents";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeroSection id="home">
      <Overlay />
      <Container>
        <ContentWrapper>
          <TextContent>
            <MainHeading>
              Hi, I'm <AccentText>Your Name</AccentText>
            </MainHeading>
            <SubHeading>Full Stack Developer</SubHeading>
            <Description>
              Passionate about creating beautiful, functional web applications
              that solve real-world problems and deliver exceptional user
              experiences.
            </Description>
            <ButtonGroup>
              <PrimaryButton onClick={() => scrollToSection("contact")}>
                Get In Touch
              </PrimaryButton>
              <SecondaryButton onClick={() => scrollToSection("projects")}>
                View Work
              </SecondaryButton>
            </ButtonGroup>
            <SocialLinks>
              <SocialIcon
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </SocialIcon>
              <SocialIcon
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </SocialIcon>
              <SocialIcon
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter size={28} />
              </SocialIcon>
              <SocialIcon
                href="mailto:your.email@example.com"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </SocialIcon>
            </SocialLinks>
          </TextContent>
          <ImageWrapper>
            <ProfileImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=800"
              alt="Your Name - Full Stack Developer"
            />
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
