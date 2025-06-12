import { Component } from "react";
import {
  ProjectsSection,
  Grid,
  Card,
  TechTag,
  TagRow,
} from "./styledComponent";

class Projects extends Component {
  render() {
    return (
      <ProjectsSection id="projects">
        <h2>Featured Projects</h2>
        <Grid>
          <Card>
            <img src="/ecommerce.jpg" alt="E-Commerce" />
            <h3>E-Commerce Platform</h3>
            <p>Online store built with React, Node.js, and Stripe.</p>
            <TagRow>
              <TechTag>React</TechTag>
              <TechTag>Node.js</TechTag>
              <TechTag>Stripe</TechTag>
            </TagRow>
          </Card>
          <Card>
            <img src="/todo.jpg" alt="Task Manager" />
            <h3>Task Management App</h3>
            <p>
              Real-time tool with drag-and-drop, built using Express &
              PostgreSQL.
            </p>
            <TagRow>
              <TechTag>Express</TechTag>
              <TechTag>Socket.io</TechTag>
            </TagRow>
          </Card>
          <Card>
            <img src="/weather.jpg" alt="Weather App" />
            <h3>Weather Dashboard</h3>
            <p>Forecasting app with OpenWeather API and charts.</p>
            <TagRow>
              <TechTag>Chart.js</TechTag>
              <TechTag>OpenWeather</TechTag>
            </TagRow>
          </Card>
        </Grid>
      </ProjectsSection>
    );
  }
}

export default Projects;
