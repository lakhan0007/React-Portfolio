import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import { Container, Row } from "react-bootstrap";
import Resume1 from "../../Assets/resume/resume1.jpg";
import Resume2 from "../../Assets/resume/resume2.jpg";


import pdf from "../../Assets/../Assets/Lakhan_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import AddCustomer from "./AddCustomer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/file/d/1GOrqny6glbwNv2jTUmru3w1zbaHw0AAU/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [show, setShow] = useState(false)
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
          className="button"
            variant="primary"
            style={{ maxWidth: "250px" }}
            onClick={handleShow}

          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}


      <Container className="resume-image">

              <div className="resumeLogo">
                <img src={Resume1} alt="BigCo Inc. logo"/>
              </div>
              <div className="resumeLogo">

                <img src={Resume2} alt="BigCo Inc. logo"/>
              </div>
        
      </Container>

        

        {/* <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            // href={pdf}
            // target="_blank"
            style={{ maxWidth: "250px" }}
            onClick={handleShow}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
    <AddCustomer show={show} handleClose={handleClose}/>
    </>
  );
}

export default ResumeNew;
