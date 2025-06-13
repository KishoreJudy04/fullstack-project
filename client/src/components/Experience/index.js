import { Chrono } from "react-chrono";
import React from "react";
import {
  ExperienceSection,
  Container,
  SectionTitle,
  ChronoWrapper,
} from "./styledComponents";

const Experience = () => {
  const items = [
    {
      title: "2023 - Present",
      cardTitle: "Senior Full Stack Developer",
      cardSubtitle: "Tech Solutions Inc.",
      cardDetailedText:
        "Led development of multiple web applications using React.js and Node.js. Managed a team of 4 developers and improved application performance by 40%. Implemented modern CI/CD practices and mentored junior developers.",
    },
    {
      title: "2021 - 2023",
      cardTitle: "Frontend Developer",
      cardSubtitle: "Digital Agency Pro",
      cardDetailedText:
        "Developed responsive web applications for various clients using React.js, Vue.js, and modern CSS frameworks. Collaborated with designers to create pixel-perfect user interfaces and improved user engagement by 60%.",
    },
    {
      title: "2020 - 2021",
      cardTitle: "Junior Web Developer",
      cardSubtitle: "StartUp Innovations",
      cardDetailedText:
        "Built and maintained company websites using HTML, CSS, JavaScript, and PHP. Learned modern frontend frameworks and contributed to the development of an e-commerce platform that generated $500K+ in revenue.",
    },
    {
      title: "2018 - 2020",
      cardTitle: "Bachelor's in Computer Science",
      cardSubtitle: "University of Technology",
      cardDetailedText:
        "Graduated with honors, focusing on software engineering and web development. Completed multiple projects including a social media platform, an inventory management system, and a mobile app for campus events.",
    },
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Experience & Education</SectionTitle>
        <ChronoWrapper>
          <Chrono
            items={items}
            mode="VERTICAL"
            theme={{
              primary: "#3B82F6",
              secondary: "#F97316",
              cardBgColor: "white",
              cardForeColor: "#1F2937",
              titleColor: "#1F2937",
            }}
            fontSizes={{
              cardSubtitle: "0.95rem",
              cardText: "0.9rem",
              cardTitle: "1.1rem",
              title: "0.9rem",
            }}
            cardHeight={200}
            slideShow
            hideControls
          />
        </ChronoWrapper>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
