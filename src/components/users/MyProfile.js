import React from "react";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

function MyProfile() {
  return (
    <div>
      <Container style={{ minWidth: "350px", width: "60%" }}>
        <Card style={{ margin: "10px" }}>
          <Image
            style={{ margin: "10px" }}
            height="180"
            width="171"
            src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"
            roundedCircle
          />
          <Card.Body>
            <Card.Header style={{ padding: "1em" }}>
              <Card.Title>My Profile</Card.Title>
              <Card.Subtitle>Ram Prasad Baidya</Card.Subtitle>
            </Card.Header>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <Form.Label style={{ padding: "1em" }}>Name</Form.Label>
            <ListGroup.Item>Ram Prasad Baidya</ListGroup.Item>
            <Form.Label style={{ padding: "1em" }}>Email</Form.Label>
            <ListGroup.Item>ramprasadbaidya21@gmail.com</ListGroup.Item>
            <Form.Label style={{ padding: "1em" }}>Date of Birth</Form.Label>
            <ListGroup.Item>15th July, 1997</ListGroup.Item>
            <Form.Label style={{ padding: "1em" }}>Contact No</Form.Label>
            <ListGroup.Item>+91 6290338636</ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <footer>Copyright &copy;Ram Prasad Baidya 2021</footer>
    </div>
  );
}

export default MyProfile;
