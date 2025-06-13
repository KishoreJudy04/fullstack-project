import React from "react";
import {
  AboutSection,
  Container,
  SectionTitle,
  AboutContent,
  ImageSection,
  AboutImage,
  TextSection,
  Bio,
  SkillsTitle,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  SkillDescription,
  Title,
  AccentText,
} from "./styledComponents";
const About = () => {
  const skills = [
    {
      icon: "⚛️",
      name: "React.js",
      description: "Building interactive UIs",
    },
    {
      icon: "🚀",
      name: "Node.js",
      description: "Server-side development",
    },
    {
      icon: "🎨",
      name: "UI/UX Design",
      description: "Creating beautiful interfaces",
    },
    {
      icon: "📱",
      name: "Responsive Design",
      description: "Mobile-first approach",
    },
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>
          Why Do You <AccentText>Hire</AccentText> Me?
        </SectionTitle>
        <AboutContent>
          <ImageSection>
            <Title>About Me</Title>
            <Bio>
              I'm a passionate Full Stack Developer with over 3 years of
              experience creating digital experiences that make people's lives
              easier.
            </Bio>
            <AboutImage
              src="https://portfolioprosite.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-image.464b6621.png&w=1920&q=100"
              alt="About"
            />
          </ImageSection>
          <TextSection>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillCard key={index}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                  <SkillDescription>{skill.description}</SkillDescription>
                </SkillCard>
              ))}
            </SkillsGrid>
          </TextSection>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
