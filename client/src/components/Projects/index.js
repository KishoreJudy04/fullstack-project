import { useEffect, useState } from "react";
import {
  ProjectsSection,
  ProjectsHeading,
  ProjectsGrid,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechBadge,
  ProjectLinks,
  ProjectLink,
} from "./styledComponents";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Mock data instead of axios
  useEffect(() => {
    const mockProjects = [
      {
        name: "Portfolio Website",
        description:
          "A personal portfolio built with React and styled-components.",
        tech: ["React", "JavaScript", "Styled-Components"],
        github: "https://github.com/your-username/portfolio",
        demo: "https://your-portfolio-demo.vercel.app/",
      },
      {
        name: "Todo App",
        description: "A simple todo list application with local storage.",
        tech: ["React", "CSS"],
        github: "https://github.com/your-username/todo-app",
        demo: "https://todo-app-demo.vercel.app/",
      },
      {
        name: "Weather App",
        description: "Weather forecast app using OpenWeatherMap API.",
        tech: ["React", "API", "Bootstrap"],
        github: "https://github.com/your-username/weather-app",
        demo: "https://weather-app-demo.vercel.app/",
      },
    ];

    setProjects(mockProjects);
  }, []);

  return (
    <ProjectsSection id="projects">
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectsGrid>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx}>
            <ProjectTitle>{proj.name}</ProjectTitle>
            <ProjectDescription>{proj.description}</ProjectDescription>
            <TechStack>
              {proj.tech.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </TechStack>
            <ProjectLinks>
              <ProjectLink
                href={proj.github}
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub /> GitHub
              </ProjectLink>
              <ProjectLink href={proj.demo} target="_blank" aria-label="Demo">
                <FaExternalLinkAlt /> Demo
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
