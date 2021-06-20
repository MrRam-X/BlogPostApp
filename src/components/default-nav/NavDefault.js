import { Link } from "react-router-dom";
import React from "react";
import "./NavDefault.css";

export default function NavDefault() {
  return (
    <div className="default-nav">
      <ul>
        <li>
          <Link
            style={{
              color: "#f5f7fa",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="/"
          >
            All Posts
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "#f5f7fa",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="/create-post"
          >
            Create Post
          </Link>
        </li>
      </ul>
    </div>
  );
}
