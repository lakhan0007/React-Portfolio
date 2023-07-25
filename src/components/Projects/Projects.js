import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// JavaScript
import Flash from "../../Assets/Projects/flash.png";
import List from "../../Assets/Projects/list.png";
import Webtrack from "../../Assets/Projects/Webtrack.png";
import Clock from "../../Assets/Projects/Clock.png";
import Sticky from "../../Assets/Projects/sticky-notes.png";
import Music from "../../Assets/Projects/Music.png";
import Game from "../../Assets/Projects/Game.png";
import StopWatch from "../../Assets/Projects/StopWatch.png";
import Dragon from "../../Assets/Projects/dragon.png";
import Toe from "../../Assets/Projects/toe.png";
import API from "../../Assets/Projects/Api.png";
import Math from "../../Assets/Projects/Math.png";
import Quotes from "../../Assets/Projects/quotes.png";
import Burgur from "../../Assets/Projects/Burgur.png";
import Digital from "../../Assets/Projects/digital.png";

// Reactjs
import Rock from "../../Assets/Projects/rock.jpg";
import Textutils from "../../Assets/Projects/text.png";
import Weather from "../../Assets/Projects/weather.png";

// Nodejs
import Json from "../../Assets/Projects/json.png";
import SQL from "../../Assets/Projects/sql.png";
import Mongoose from "../../Assets/Projects/mongoose.png";
// import Mongoose from "../../Assets/Projects/mongoose.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My JavaScript<strong className="purple"> Project</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few JavaScript projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        {/* JavaScript Project Start */}
         {/* 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Webtrack}
              isBlog={false}
              title="WebTrack"
              description="My personal blog page build with JavaScript and Css which takes the content from makdown files and renders it using JavaScript. Easy to write blogs using markdown."
              ghLink="https://github.com/lakhan0007/Webtrack"
              demoLink="https://lakhan0007.github.io/Webtrack/"
            />
          </Col>

          {/* 2  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quotes}
              isBlog={false}
              title="Random Quotes"
              description="A project in React.js for API searching can be developed to allow users to search for different APIs and get the relevant results based on their search query. The project can be developed using various APIs like RapidAPI, ProgrammableWeb, or any other public API directory."
              ghLink="https://github.com/lakhan0007/Quotes"
              demoLink="https://lakhan0007.github.io/Quotes/"
            />
          </Col>

        {/* 3 */}
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Digital}
              isBlog={false}
              title="Digital Clock"
              description="The Digital Clock application is a web-based tool that displays the current time in a digital format. It provides users with a real-time representation of the current hour, minutes, and seconds."
              ghLink="https://github.com/lakhan0007/Digital-Clock"
              demoLink="https://lakhan0007.github.io/Digital-Clock/"
            />
          </Col>
          
        {/*4 */}
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Clock}
              isBlog={false}
              title="Analog Clock"
              description="An analog clock project can also be created using React JS, a popular JavaScript library for building user interfaces. Here's how you can create an analog clock project using React JS:"
              ghLink="https://github.com/lakhan0007/Analog-clock_project-21"
              demoLink="https://lakhan0007.github.io/Analog-clock/"
            />
          </Col>

          {/* 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StopWatch}
              isBlog={false}
              title="Stop Watch"
              description="A stopwatch is a timekeeping device that is used to measure the amount of time elapsed between its activation and deactivation. It typically has two buttons, one to start or resume the timer and another to stop or reset it."
              ghLink="https://github.com/lakhan0007/Stop-Watch"
              demoLink="https://lakhan0007.github.io/Stop-Watch/"
            />
          </Col>

          {/* 6  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={API}
              isBlog={false}
              title="API Search"
              description="A project in React.js for API searching can be developed to allow users to search for different APIs and get the relevant results based on their search query. The project can be developed using various APIs like RapidAPI, ProgrammableWeb, or any other public API directory."
              ghLink="https://github.com/lakhan0007/Unsplash-API"
              demoLink="https://lakhan0007.github.io/Unsplash-API/"
            />
          </Col>

        {/* 7 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={List}
              isBlog={false}
              title="To-Do-List"
              description="To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
              ghLink="https://github.com/lakhan0007/To-Do-List"
              demoLink="https://lakhan0007.github.io/To-Do-List/"
            />
          </Col>

        {/* 8 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flash}
              isBlog={false}
              title="FlashCard"
              description="Flashcards are often used to memorize and retain important information such as vocabulary, formulas, historical dates, and scientific concepts. Flashcards can be a helpful tool for test preparation, as they allow students to review and quiz themselves on key concepts and information."
              ghLink="https://github.com/lakhan0007/Flashcard_project-11"
              demoLink="https://lakhan0007.github.io/Flashcard/"
            />
          </Col>

         {/* 9  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sticky}
              isBlog={false}
              title="Sticky-Notes"
              description="A sticky notes React.js project is a simple web application that allows users to create and manage digital sticky notes on a virtual board. The application is built using the React.js framework, a popular JavaScript library for building user interfaces.."
              ghLink="https://github.com/lakhan0007/sticky_Notes_project-13"
              demoLink="https://lakhan0007.github.io/sticky-Notes/"
            />
          </Col>

      {/* 10 */}
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

        {/* 11 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Math}
              isBlog={false}
              title="Math For Kids"
              description="A project in React.js for API searching can be developed to allow users to search for different APIs and get the relevant results based on their search query. The project can be developed using various APIs like RapidAPI, ProgrammableWeb, or any other public API directory."
              ghLink="https://github.com/lakhan0007/Add-Project"
              demoLink="https://lakhan0007.github.io/Add-Project/"
            />
          </Col>

        {/* 12 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Pairing Game"
              description="Some Random Quote Generators may allow users to filter the quotes by author, category, or keyword. They may also include a feature to share the quote on social media or save it for later reference."
              ghLink="https://github.com/lakhan0007/Pairing_Game_project-23"
              demoLink="https://lakhan0007.github.io/Pairing-Game/"
            />
          </Col>

        {/* 13 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rock}
              isBlog={false}
              title="Rock Paper Scissor"
              description="The Rock Paper Scissors game is a web-based application that allows users to play the classic game against the computer. Players can make their move by selecting either rock, paper, or scissors, and the computer will generate its move."
              ghLink="https://github.com/lakhan0007/Rock-paper"
              demoLink="https://lakhan0007.github.io/Rock-paper/"
            />
          </Col>

          {/* 14  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dragon}
              isBlog={false}
              title="Kill the Dragon Game"
              description="A Kill the Dragon Game ReactJS project is a web-based game application that challenges users to defeat a dragon by shooting arrows at it. The application is built using the ReactJS library, which is a popular JavaScript library used for building user interfaces."
              ghLink="https://github.com/lakhan0007/Kill_Dragon_Project-24"
              demoLink="https://lakhan0007.github.io/Kill-Dragon/"
            />
          </Col>

          {/* 15  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Toe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A Tic Tac Toe Game ReactJS project is a web-based game application that allows two players to play the classic game of Tic Tac Toe. The application is built using the ReactJS library, which is a popular JavaScript library used for building user interfaces."
              ghLink="https://github.com/lakhan0007/Tic_Tac_To_Project-25"
              demoLink="https://lakhan0007.github.io/Tic-Tac-Toe/"
            />
          </Col>
          {/* JavaScript Project End */}


        {/* NodeJS Project start */}
        <h1 className="project-heading">
          My NodeJs <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few NodeJs projects I've worked on recently.
        </p>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Json}
              isBlog={false}
              title="Json Database"
              description="The JSON Database Management System is a project that leverages Node.js to create a lightweight, file-based database system using JSON as the storage format. The system allows users to perform CRUD (Create, Read, Update, Delete) operations on JSON data, providing a simple and efficient solution for managing structured data."
              ghLink="https://github.com/lakhan0007/NodeJs-JSON"
              demoLink="https://nodejson.onrender.com/products"
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SQL}
              isBlog={false}
              title="SQL Database"
              description="The SQL Database Project in Node.js is a web-based application that utilizes Node.js and an SQL database to create a robust and scalable database management system. It allows users to perform CRUD (Create, Read, Update, Delete) operations on SQL databases, providing a reliable solution for managing structured data."
              ghLink="https://github.com/lakhan0007/Node-SQL"
              demoLink="https://nodejson.onrender.com/products"
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mongoose}
              isBlog={false}
              title="Mongoose Database"
              description="The Mongoose Database Project in Node.js is a web-based application that utilizes the Mongoose library to interact with a MongoDB database. It allows users to perform CRUD (Create, Read, Update, Delete) operations on collections and manage data effectively."
              ghLink="https://github.com/lakhan0007/MongoDB"
              demoLink="https://mongo-wmhx.onrender.com/"
            />
        </Col>
          {/* NodeJS Project End */}

           {/* ReactJs Project Start */}
          <h1 className="project-heading">
          My React <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few React projects I've worked on recently.
        </p>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Burgur}
              isBlog={false}
              title="Burgur Builder"
              description="The Burger Builder application is a web-based platform that allows users to build and customize their own burgers. Users can select various ingredients, customize the burger to their liking, and place an order."
              ghLink="https://github.com/lakhan0007/BurgerBuilder"
              demoLink="https://burger-builder-git-master-lakhan0007.vercel.app/"
            />
        </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Textutils}
              isBlog={false}
              title="Textutils"
              description="The Textutils project is a web application developed using the React.js framework. It aims to provide various text manipulation and analysis functionalities to users. The project utilizes React's component-based architecture to create reusable and interactive UI elements."
              ghLink="https://github.com/lakhan0007/textutils"
              demoLink="https://textutils-zeta-tan.vercel.app/"
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather API"
              description="This weather application is a simple web app that allows users to search for weather conditions in any location in the world. The app uses the OpenWeatherMap API to retrieve weather data, and it is built using React JS.."
              ghLink="https://github.com/lakhan0007/Weather-App"
              demoLink="https://weather-app-psi-ashy.vercel.app/"
            />
        </Col>
        {/* ReactJs Project End */}

      

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
