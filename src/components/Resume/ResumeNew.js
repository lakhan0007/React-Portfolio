import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resume from "../../Assets/resume/resume.jpg";
// import Resume2 from "../../Assets/resume/resume2.jpg";


// import pdf from "../../Assets/../Assets/Lakhan_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import AddCustomer from "./AddCustomer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/drive/u/0/my-drive";

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



      <Container className="resume-image">

              <div className="resumeLogo">
                <img src={Resume} alt="BigCo Inc. logo"/>
              </div>
              {/* <div className="resumeLogo">

                <img src={Resume2} alt="BigCo Inc. logo"/>
              </div> */}
        
      </Container>

        


        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
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
