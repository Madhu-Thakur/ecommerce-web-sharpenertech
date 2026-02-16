import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Cart from "./Cart";

function Header() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>The Generics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>HOME</Nav.Link>
            <Nav.Link>STORE</Nav.Link>
            <Nav.Link>ABOUT</Nav.Link>
          </Nav>
          <Button variant="outline-info" onClick={() => setShowCart(true)}>
            Cart
          </Button>
        </Container>
      </Navbar>

      <Cart show={showCart} handleClose={() => setShowCart(false)} />
    </>
  );
}

export default Header;
