import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../css/Navbar.css";

const NavbarMenu = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>

          <Nav className="me-auto">
            <Link className="linkstyle" to={"/home"}>
              Home
            </Link>
            <Link className="linkstyle" to={"/about"}>
              About
            </Link>
            <Link className="linkstyle" to={"/services"}>
              services
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
