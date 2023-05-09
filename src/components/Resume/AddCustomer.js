import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Form } from 'react-bootstrap';
import pdf from "../../Assets/../Assets/Lakhan_Resume.pdf";

export default function AddCustomer({show, handleClose}) {
	const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_05o6a8u",
        "template_kmms3gh",
        formRef.current,
        "Yv53WyiFO58_nVrAc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          
        },
        (error) => {
          console.log(error.text);
          console.log("message Failed");
        }
      );

    e.target.reset();
  };
  const onButtonClick = () => {
	
	// using Java Script method to get PDF file
	fetch(pdf).then(response => {
		response.blob().then(blob => {
			// Creating new object of PDF file
			const fileURL = window.URL.createObjectURL(blob);
			// Setting various property values
			let alink = document.createElement('a');
			alink.href = fileURL;
			alink.download = pdf;
			alink.click();
			console.log(alink,"alink");
		})
	})
}
const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const [fields, setFields] = useState({
    name:"",
    email:"",
	message:""
  })
  const [fieldError, setFieldError] = useState();

  const fillFields = (key, value) => {
    setFields((prev) => {
      return { ...prev, [key]: value };
    });
    if (fieldError !== undefined && fieldError[key]) {
      fieldError[key] = "";
    }
  };
  const checkFields = (fields) => {
    const fieldErr = {};
    Object.keys(fields).map((e) => {
      if (fields[e] === "") {
        fieldErr[e] = (
          <p style={{ color: "red", textAlign: "center" }}>
            {" "}
            This field is required{" "}
          </p>
        );
      }
    });
    if (Object.keys(fieldErr).length === 0) {
      if (fields.email.match(regex)) {
        onButtonClick()
      } else {
        fieldErr.email = (
          <p style={{ color: "red", textAlign: "center" }}>
            {" "}
            Invalid Email{" "}
          </p>
        );
        setFieldError(fieldErr);
      }
    } else {
      setFieldError(fieldErr);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>FILL TO DOWNLOAD</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form className="register-form" ref={formRef} onSubmit={handleSubmit}>
        <input
          name="user_name"
          className="form-field"
          type="text"
          placeholder="First Name"
          onChange={(e) => fillFields("name", e.target.value)}
        />
        {fieldError?.name}

        <input
          name="user_email"
          className="form-field"
          type="email"
          placeholder="Email"
          onChange={(e) => fillFields("email", e.target.value)}
        />
        {fieldError?.email}

        <input
          name="message"
          className="form-field"
          type="textarea"
          placeholder="Message"
          onChange={(e) => fillFields("message", e.target.value)}
        />
        {fieldError?.message}
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => checkFields(fields)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </form>
    </Modal.Body>
    </Modal>

);
}

