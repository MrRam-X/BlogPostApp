import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function UserPost() {
  return (
    <div>
      <Container
        className="all-posts-container"
        fluid
        style={{ minWidth: "350px", width: "60%", marginBottom: "20px" }}
      >
        <Card
          bg="dark"
          text="light"
          style={{ padding: "1em", margin: "10px 0px" }}
        >
          <Card.Header className="text-center">
            <Card.Title>Went to Switzerland</Card.Title>
            <Card.Subtitle>Author: Ram Prasad Baidya</Card.Subtitle>
          </Card.Header>
          <Card.Img
            variant="top"
            src="https://deih43ym53wif.cloudfront.net/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg"
          />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            Posted at 13th Jun,2021
          </Card.Footer>
        </Card>
      </Container>
      <footer
        style={{
          backgroundColor: "#2e8fff",
          color: "#f5f7fa",
          textAlign: "center",
          padding: "1em",
          width: "100%",
        }}
      >
        Copyright &copy;Ram Prasad Baidya 2021
      </footer>
    </div>
  );
}
