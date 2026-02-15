import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">The Generics</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="#">HOME</Nav.Link>
          <Nav.Link href="#">STORE</Nav.Link>
          <Nav.Link href="#">ABOUT</Nav.Link>
        </Nav>

        <Button variant="outline-info">Cart</Button>
      </Container>
    </Navbar>
  );
}

export default Header;