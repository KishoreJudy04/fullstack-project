import {
  AboutSection,
  Container,
  Header,
  Title,
  Divider,
  ContentGrid,
  ImageContainer,
  TextContent,
  Paragraph,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
} from "./styledComponents";

export default function About() {
  return (
    <AboutSection id="about">
      <Container>
        <Header>
          <Title>About Me</Title>
          <Divider />
        </Header>

        <ContentGrid>
          <ImageContainer>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Developer workspace with code"
            />
          </ImageContainer>

          <TextContent>
            <Paragraph>
              I'm a passionate full-stack developer with over 3 years of
              experience building web applications that combine beautiful design
              with robust functionality. My journey in tech started during
              college when I discovered the power of code to solve real-world
              problems.
            </Paragraph>
            <Paragraph>
              I specialize in modern JavaScript frameworks like React and
              Node.js, and I love working with teams to create products that
              users genuinely enjoy. When I'm not coding, you can find me
              exploring new technologies, contributing to open-source projects,
              or hiking in the mountains.
            </Paragraph>
            <Paragraph>
              I believe in writing clean, maintainable code and always staying
              curious about emerging technologies. My goal is to continue
              growing as a developer while building meaningful applications that
              make a difference.
            </Paragraph>

            <StatsGrid>
              <StatCard>
                <StatNumber>25+</StatNumber>
                <StatLabel>Projects Completed</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>3+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatCard>
            </StatsGrid>
          </TextContent>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
}
