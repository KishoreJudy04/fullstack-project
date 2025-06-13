import styled from "styled-components";

const ExperienceSection = styled.section`
  padding: 5rem 0;
  background: ${(props) => props.theme.background};
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

const ChronoWrapper = styled.div`
  .timeline-card-content {
    background: white !important;
    border-radius: 15px !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
    border-left: 4px solid ${(props) => props.theme.primary} !important;
  }

  .timeline-card-title {
    color: ${(props) => props.theme.text} !important;
    font-weight: 600 !important;
  }

  .timeline-card-content p {
    color: ${(props) => props.theme.textLight} !important;
    line-height: 1.6 !important;
  }

  .timeline-vertical .timeline-circle {
    background: ${(props) => props.theme.primary} !important;
    border: 3px solid ${(props) => props.theme.secondary} !important;
  }

  .timeline-vertical .timeline-line {
    background: ${(props) => props.theme.primary} !important;
  }
`;

export { ExperienceSection, Container, SectionTitle, ChronoWrapper };
