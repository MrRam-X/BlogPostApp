import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreatePost() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const authorInputRef = useRef();
  const history = useHistory();

  function onSubmitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;

    const postData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      author: enteredAuthor,
      date: Date(),
    };
    console.log(postData);
    fetch(
      "https://meetup-react-db-default-rtdb.firebaseio.com/finalPosts.json",
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <Container fluid style={{ minWidth: "350px", width: "60%" }}>
        <Card style={{ margin: "10px 0px", padding: "1em" }}>
          <Card.Body>
            <Card.Title>Create Post</Card.Title>
            <Form onSubmit={onSubmitHandler}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the title"
                  required
                  ref={titleInputRef}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Image url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image url"
                  required
                  ref={imageInputRef}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author name"
                  required
                  ref={authorInputRef}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter description"
                  rows={3}
                  required
                  ref={descriptionInputRef}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Create Post
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CreatePost;
