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
        "service_l3wnfrk",
        "template_uuuk158",
        formRef.current,
        "cFnjAcg7kdp3Vvd5Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
	  <Modal.Title>Modal heading</Modal.Title>
	</Modal.Header>
	<Modal.Body>
	  <Form>
	  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
		  <Form.Label>Name</Form.Label>
		  <Form.Control
			type="text"
			placeholder="Enter Your Name"
			autoFocus
			onChange={(e)=>fillFields("name",e.target.value)}
		  />
		  {fieldError?.name}
		</Form.Group>
		<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
		  <Form.Label>Email address</Form.Label>
		  <Form.Control
			type="email"
			placeholder="example123@gamil.com"
			autoFocus
			onChange={(e)=>fillFields("email",e.target.value)}
		  />
		  {fieldError?.email}
		</Form.Group>
		<Form.Group
		  className="mb-3"
		  controlId="exampleForm.ControlTextarea1"
		>
		  <Form.Label>Message</Form.Label>
		  <Form.Control as="textarea" rows={3} onChange={(e)=>fillFields("message",e.target.value)}/>
		</Form.Group>
		{fieldError?.message}
	  </Form>
	</Modal.Body>
	<Modal.Footer>
	  <Button variant="secondary" onClick={handleClose}>
		Close
	  </Button>
	  <Button variant="primary" onClick={()=>checkFields(fields)}>
		Save Changes
	  </Button>
	</Modal.Footer>
  </Modal>

);
}

