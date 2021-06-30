import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import styles from "./BasicNav.module.css";

function BasicNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand>
          <h2 className={styles.brandHeader}>Blog Post</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto basicNavContainer">
            <Link to="/" className={styles.linkStyle}>
              Home
            </Link>
            <Link to="/profile" className={styles.linkStyle}>
              Profile
            </Link>
            <Link to="/about" className={styles.linkStyle}>
              About
            </Link>
            <Link to="/register" className={styles.linkStyle}>
              Register
            </Link>
            <Link to="/login" className={styles.linkStyle}>
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default BasicNav;
