import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
            {props.title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/"
                style={{ color: "#fff", fontSize: "17px" }}
                className="link"
              >
                {props.Link1}
              </Link>
              <Link
                to="latestnews"
                style={{ color: "#fff", fontSize: "17px" }}
                className="link"
              >
                {props.Link2}
              </Link>
              <Link
                to="about"
                style={{ color: "#fff", fontSize: "17px" }}
                className="link"
              >
                {props.Link3}
              </Link>
              <Link
                to="contact"
                style={{ color: "#fff", fontSize: "17px" }}
                className="link"
              >
                {props.Link4}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

// Setting Prop Types

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    Link1: PropTypes.string,
    Link2: PropTypes.string,
    Link3: PropTypes.string,
    Link4: PropTypes.string,

  };
  
  // Default Prop Value
  NavBar.defaultProps = {
    title: "SET SITE TITLE HERE",
    Link1: "SET LINK1 HERE",
    Link2: "SET LINK2 HERE",
    Link3: "SET LINK3 HERE",
    Link4: "SET LINK4 HERE",
  };
