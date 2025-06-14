import {
  HeroSection,
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
  MobileProfileImage,
} from "./styledComponents";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <HeroSection id="home">
      <Container>
        <ContentWrapper>
          <TextContent>
            <MobileProfileImage
              src="https://i.ibb.co/ccxxH1Q9/20250328-173317-EDIT.jpg"
              alt="Kishore - Full Stack Developer"
            />
            <MainHeading>
              Hi, I'm <AccentText>KISHORE</AccentText>
            </MainHeading>
            <SubHeading>Full Stack Developer</SubHeading>
            <Description></Description>
            <ButtonGroup>
              <ResumeButton href="/resume.pdf" download>
                Download Resume
              </ResumeButton>
            </ButtonGroup>
            <SocialLinks>
              <SocialIcon
                href="https://github.com/KishoreJudy04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/kishorebk13042004/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/kishore_judy_04/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </SocialIcon>
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=100040365094247&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
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
