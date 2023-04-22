import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Flash from "../../Assets/Projects/flash.png";
import List from "../../Assets/Projects/list.png";
import Webtrack from "../../Assets/Projects/Webtrack.png";
import Clock from "../../Assets/Projects/clock1.jpg";
import Sticky from "../../Assets/Projects/sticky-notes.png";
import Music from "../../Assets/Projects/Music.png";
import Game from "../../Assets/Projects/Game.png";
import suicide from "../../Assets/Projects/suicide.png";

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
              imgPath={Webtrack}
              isBlog={false}
              title="WebTrack"
              description="My personal blog page build with JavaScript and Tailwind Css which takes the content from makdown files and renders it using JavaScript. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/lakhan0007/Webtrack"
              demoLink="https://lakhan0007.github.io/Webtrack/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={List}
              isBlog={false}
              title="To-Do-List"
              description="To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
              ghLink="https://github.com/lakhan0007/To-Do-List_project-12"
              demoLink="https://lakhan0007.github.io/To-Do-List_project-12/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flash}
              isBlog={false}
              title="FlashCard"
              description="Flashcards are often used to memorize and retain important information such as vocabulary, formulas, historical dates, and scientific concepts. Flashcards can be a helpful tool for test preparation, as they allow students to review and quiz themselves on key concepts and information."
              ghLink="https://github.com/lakhan0007/Flashcard_project-11"
              demoLink="https://lakhan0007.github.io/Flashcard_project-11/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Clock}
              isBlog={false}
              title="Analog Clock"
              description="An analog clock project can also be created using React JS, a popular JavaScript library for building user interfaces. Here's how you can create an analog clock project using React JS:"
              ghLink="https://github.com/lakhan0007/Analog-clock_project-21"
              demoLink="https://lakhan0007.github.io/Analog-clock_project-21/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sticky}
              isBlog={false}
              title="Sticky-Notes"
              description="A sticky notes React.js project is a simple web application that allows users to create and manage digital sticky notes on a virtual board. The application is built using the React.js framework, a popular JavaScript library for building user interfaces.."
              ghLink="https://github.com/lakhan0007/sticky_Notes_project-13"
              demoLink="https://lakhan0007.github.io/sticky_Notes_project-13/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Music}
              isBlog={false}
              title="Music Player"
              description="A Music Player ReactJS project is a web-based application that allows users to play and manage music tracks. The application is built using the ReactJS library, which is a popular JavaScript library used for building user interfaces."
              ghLink="https://github.com/lakhan0007/Music-Player"
              demoLink="https://lakhan0007.github.io/Music-Player/" 
             />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Pairing Game"
              description="A Pairing Game ReactJS project is a web-based game application that challenges users to match pairs of cards that are randomly placed on a game board. The application is built using the ReactJS library, which is a popular JavaScript library used for building user interfaces."
              ghLink="https://github.com/lakhan0007/Pairing_Game_project-23"
              demoLink="https://lakhan0007.github.io/Pairing_Game_project-23/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
