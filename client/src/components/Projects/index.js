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
  TechTag,
  ProjectButtons,
  ProjectButton,
} from "./styledComponents";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, shopping cart, payment integration, and admin panel.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://portfolioprosite.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application built with React and Firebase. Features real-time updates, team collaboration, file attachments, and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      techStack: ["React", "Firebase", "Material-UI", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current weather conditions and forecasts. Built with React and integrated with multiple weather APIs for accurate data.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      techStack: ["React", "API Integration", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and automated reporting features.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      techStack: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
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
