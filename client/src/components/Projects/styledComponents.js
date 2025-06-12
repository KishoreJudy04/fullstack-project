import styled from "styled-components";

export const ProjectsSection = styled.section`
  background: #f7f9fa;
  padding: 4rem 1rem;
`;

export const ProjectsHeading = styled.h2`
  font-size: 2.5rem;
  color: #2196f3;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #222;
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  color: #444;
  margin-bottom: 1rem;
`;

export const TechStack = styled.div`
  margin-bottom: 1rem;
`;

export const TechBadge = styled.span`
  background: #e3f2fd;
  color: #1976d2;
  border-radius: 6px;
  padding: 0.3em 0.8em;
  margin-right: 0.5em;
  font-size: 0.9em;
  display: inline-block;
  margin-bottom: 0.3em;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLink = styled.a`
  color: #2196f3;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4em;
  transition: color 0.2s;
  &:hover {
    color: #1769aa;
    text-decoration: underline;
  }
`;
