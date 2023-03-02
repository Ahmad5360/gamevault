import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Container>
          <Navbar.Brand
            to="/"
            style={{ color: "#fff", fontSize: "32px" }}
          >
            GameVault
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/"
                style={{ color: "#fff", fontSize: "17px" }}
                className="link"
              >
                Home
              </Link>
              <Link
                to="latestnews"
                style={{ color: "#fff", fontSize: "17px" }}
                className="link"
              >
                Latest News
              </Link>
              <Link
                to="about"
                style={{ color: "#fff", fontSize: "17px" }}
                className="link"
              >
                About Us
              </Link>
              <Link
                to="contact"
                style={{ color: "#fff", fontSize: "17px" }}
                className="link"
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
