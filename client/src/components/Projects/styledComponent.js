import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 4rem;
`;

export const Grid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 30%;
  background: white;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  img {
    width: 100%;
    border-radius: 6px;
  }
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const TechTag = styled.span`
  background: #e0f7fa;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;
