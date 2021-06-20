import { React, useRef } from "react";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Register() {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputDOBRef = useRef();
  const inputMobileRef = useRef();
  const inputPasswordRef = useRef();

  const history = useHistory();

  function registerSubmitHandler(event) {
    event.preventDefault();
    const enteredName = inputNameRef.current.value;
    const enteredEmail = inputEmailRef.current.value;
    const enteredDOB = inputDOBRef.current.value;
    const enteredMobile = inputMobileRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;

    const registrationDetails = {
      name: enteredName,
      email: enteredEmail,
      dateOfBirth: enteredDOB,
      mobile: enteredMobile,
      password: enteredPassword,
    };

    fetch("https://meetup-react-db-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(registrationDetails),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
      alert("Registered Successfully!!");
    });
  }

  return (
    <div className="registration-container">
      <Container fluid style={{ minWidth: "350px", width: "60%" }}>
        <Card style={{ margin: "10px 0px", padding: "1em" }}>
          <Card.Body>
            <Card.Title>Register</Card.Title>
            <Form onSubmit={registerSubmitHandler}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  required
                  ref={inputNameRef}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  ref={inputEmailRef}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter mobile number"
                  ref={inputMobileRef}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter full name"
                  required
                  ref={inputDOBRef}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  ref={inputPasswordRef}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
