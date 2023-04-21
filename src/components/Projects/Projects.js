import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Flash from "../../Assets/Projects/flash.png";
import List from "../../Assets/Projects/list.png";
import Webtrack from "../../Assets/Projects/Webtrack.png";
import Clock from "../../Assets/Projects/clock1.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
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
              demoLink="https://lakhan0007.github.io/Webtrack/ch/"
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
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
