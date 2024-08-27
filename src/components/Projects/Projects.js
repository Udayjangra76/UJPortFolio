import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Keepchat from "../../Assets/Projects/KeepChat.png";
import Foodie from "../../Assets/Projects/Foodie.png";
import RuleEngine from "../../Assets/Projects/RuleEngine.png";
import DreamBooking from "../../Assets/Projects/DreamBooking.png";

import Workplace from "../../Assets/Projects/Workplace.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Workplace}
              isBlog={false}
              title="Workplace"
              description="Design an web app that connects businesses with freelancers offering digital services in different categories."
              ghLink="https://github.com/Udayjangra76/workplace"
              demoLink="https://workplacee.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DreamBooking}
              isBlog={false}
              title="DreamBooking.com"
              description=" Developed an web app where you can easily and securely book your preferred accommodations within clicks."

              ghLink="https://github.com/Udayjangra76/DreamBooking.com"
              demoLink="https://dreambooking-com.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Keepchat}
              isBlog={false}
              title="KeepChat"
              description="An app to stay in touch with friends and family, anytime and anywhere in the world."
              demoLink="https://keepchat-67e0a.firebaseapp.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodie}
              isBlog={false}
              title="Foodie"
              description="Design an web app that lets users browse menus, place orders, and track food deliveries with ease."
              ghLink="https://github.com/Udayjangra76/Foodie"
              demoLink="https://ffoodie.netlify.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RuleEngine}
              isBlog={false}
              title="Rule Engine"
              description="Develop a webapp  Rule Engine that creates, updates, merges, and evaluates infix rules ."
              ghLink="https://github.com/Udayjangra76/rule_engine"
            />
          </Col>
        </Row>cd
      </Container>
    </Container>
  );
}

export default Projects;
