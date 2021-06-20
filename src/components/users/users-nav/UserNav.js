import React from "react";
import { Link } from "react-router-dom";
import "./UserNav.css";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function UserNav() {
  return (
    <div className="user-nav">
      <ul>
        <li>
          <Link
            style={{
              color: "#f5f7fa",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="/all-posts"
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

        <li>
          <Link
            style={{
              color: "#f5f7fa",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            to="/my-posts"
          >
            My Posts
          </Link>
        </li>
        <li className="dropDown">
          <DropdownButton
            variant="secondary"
            id="dropdown-basic-button"
            title="Activity"
          >
            <Dropdown.Item>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/my-profile"
              >
                My Profile
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </DropdownButton>
        </li>
      </ul>
    </div>
  );
}

export default UserNav;
