import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Cart from "./Cart";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartCount } = useContext(CartContext);

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

          <Button
            variant="outline-info"
            onClick={() => setShowCart(true)}
          >
            Cart ({cartCount})
          </Button>
        </Container>
      </Navbar>

      <Cart
        show={showCart}
        handleClose={() => setShowCart(false)}
      />
    </>
  );
}

export default Header;
