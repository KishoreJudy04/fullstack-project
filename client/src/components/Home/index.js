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
  ResumeButton,
  SocialLinks,
  SocialIcon,
  ImageWrapper,
  ProfileImage,
} from "./styledComponents";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <HeroSection id="home">
      <Overlay />
      <Container>
        <ContentWrapper>
          <TextContent>
            <MainHeading>
              Hi, I'm <AccentText>KISHORE</AccentText>
            </MainHeading>
            <SubHeading>Full Stack Developer</SubHeading>
            <Description>
              I'm a Full Stack Developer who loves building clean, responsive
              web applications that solve real-world problems and deliver
              seamless user experiences.
            </Description>
            <ButtonGroup>
              <ResumeButton href="/resume.pdf" download>
                Download Resume
              </ResumeButton>
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
              src="https://i.ibb.co/S4RTrB0y/IMG-9602-removebg-preview.png"
              alt="Kishore - Full Stack Developer"
            />
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
};

export default Home;
