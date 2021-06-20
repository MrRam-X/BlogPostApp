import { React, useRef, useState } from "react";
import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const [user, setUser] = useState("");

  function loginSubmitHandler(event) {
    event.preventDefault();
    const enteredEmail = loginEmailRef.current.value;
    const enteredPassword = loginPasswordRef.current.value;

    fetch("https://meetup-react-db-default-rtdb.firebaseio.com/users.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((result) => {
        const users = [];
        for (const key in result) {
          const user = {
            id: key,
            ...result[key],
          };
          users.push(user);
        }
        console.log(result);
        const loginUser = users.find((user) => {
          if (
            user.email === enteredEmail &&
            user.password === enteredPassword
          ) {
            alert("Login successfull");
            return user.id;
          } else {
            alert("Invalid credential");
            return user.id;
          }
          //console.log(user.id);
        });

        setUser(loginUser);
        console.log(user);
      });
  }

  return (
    <div>
      <Container fluid style={{ minWidth: "350px", width: "60%" }}>
        <Card style={{ margin: "10px 0px", padding: "1em" }}>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form onSubmit={loginSubmitHandler}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  ref={loginEmailRef}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  ref={loginPasswordRef}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
