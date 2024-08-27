import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Uday Jangra </span>
            from <span className="purple"> Kurukshetra, India.</span>
            <br />
            I am a Bachelor.
            <br />
            Currently I was completed BTech from NIT KURUKSHETRA in Information Technology with 9.04 CGPA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Relish Each Phase of Your Life with Goal in Eyes !"{" "}
          </p>
          <footer className="blockquote-footer">Uday(UJ)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
