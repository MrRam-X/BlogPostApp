import React from "react";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import "./AllPosts.css";

function AllPosts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://meetup-react-db-default-rtdb.firebaseio.com/finalPosts.json")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(
        (result) => {
          const posts = [];
          for (const key in result) {
            const post = {
              id: key,
              ...result[key],
            };
            posts.push(post);
          }

          setIsLoading(false);
          setPosts(posts);
          console.log(result);
        },
        (error) => {
          setError(error);
          console.log(error.message);
        }
      );
  }, []);

  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (isLoading) {
    return (
      <div style={{ textAlign: "center", fontSize: "25px" }}>Loading....</div>
    );
  }

  return (
    <div>
      <Container
        className="all-posts-container"
        fluid
        style={{ minWidth: "350px", width: "60%" }}
      >
        {posts.map((post) => (
          <Card
            key={post.id}
            bg="dark"
            text="light"
            style={{ padding: "1em", margin: "10px 0px" }}
          >
            <Card.Header className="text-center">
              <Card.Title>{post.title}</Card.Title>
            </Card.Header>

            <Card.Img variant="top" src={post.image} />
            <Card.Body>
              <Card.Text
                className="text-center"
                style={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                {post.description}
              </Card.Text>
              <Card.Subtitle>Posted by -{post.author}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="text-center">
              {post.date.substring(0, 25)}
            </Card.Footer>
          </Card>
        ))}
      </Container>
      <footer>Copyright &copy;Ram Prasad Baidya 2021</footer>
    </div>
  );
}

export default AllPosts;
