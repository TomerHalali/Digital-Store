import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="Home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Shop">Shop</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="/">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
