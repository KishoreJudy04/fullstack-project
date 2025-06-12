import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.25rem;
  color: hsl(215, 25%, 27%);
  margin-bottom: 1rem;
`;

export const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background-color: hsl(217, 91%, 60%);
  margin: 0 auto;
`;

export const ContentGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImageContainer = styled.div`
  img {
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: auto;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  color: rgb(55, 65, 81);
  line-height: 1.75;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const StatCard = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: rgb(249, 250, 251);
  border-radius: 0.5rem;
`;

export const StatNumber = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: hsl(217, 91%, 60%);
`;

export const StatLabel = styled.div`
  color: hsl(210, 40%, 60%);
`;
