import React from "react";
import {
  ProjectsSection,
  Container,
  SectionTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  StackIcon,
  ProjectButtons,
  ProjectButton,
  AccentText,
} from "./styledComponents";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience. Built with React and styled-components.",
      image: "https://i.ibb.co/qY1rczw1/istockphoto-682084406-612x612.jpg",
      techStack: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.svg",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/KishoreJudy04/portfolio-website",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>
          My <AccentText>Projects</AccentText>
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech, techIndex) => (
                    <StackIcon key={techIndex}>
                      <img src={tech} alt={`Tech logo ${techIndex}`} />
                    </StackIcon>
                  ))}
                </TechStack>
                <ProjectButtons>
                  <ProjectButton href={project.liveUrl} primary>
                    Live Preview
                  </ProjectButton>
                  <ProjectButton href={project.githubUrl}>GitHub</ProjectButton>
                </ProjectButtons>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
