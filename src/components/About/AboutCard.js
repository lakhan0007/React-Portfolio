import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lakhan Singh Rathore </span>
            from <span className="purple"> Jaipur, Rajasthan.</span>
            <br />I am a completed BCA with a specialization in Web Development and Computing at [Name of your university Agarwal P.G College]. My coursework focuses on developing skills in both theoretical and practical aspects of computer science, including programming, data structures, algorithms, calculus, linear algebra, and discrete mathematics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Song
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lakhan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
