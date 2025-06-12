import React, { useEffect, useState } from "react";
import axios from "axios";
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((res) => setProjects(res.data));
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
