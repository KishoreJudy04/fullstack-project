import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutSection = styled.section`
  padding: 5rem 0;
  background: ${(props) => props.theme.backgroundLight};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.text};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
    );
    border-radius: 2px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.shadowLg};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextSection = styled.div`
  animation: ${fadeIn} 1s ease-out;
`;

const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${(props) => props.theme.textLight};
  margin-bottom: 2rem;
`;

const SkillsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const SkillCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 15px;
  height: 160px; /* Add this */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: ${(props) => props.theme.shadow};
  transition: all 0.3s ease;
  border-left: 4px solid ${(props) => props.theme.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadowLg};
    border-left-color: ${(props) => props.theme.secondary};
  }
`;

const SkillIcon = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SkillName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.25rem;
  margin-top: 0;
`;

const AccentText = styled.span`
  color: #00bcd4;
  font-weight: bold;
`;

export {
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
  Title,
  AccentText,
};
