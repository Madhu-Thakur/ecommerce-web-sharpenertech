import React, { useContext } from "react";
import { Modal, Button, Row, Col, Image } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

function Cart({ show, handleClose }) {
  const { cartItems, removeItem } = useContext(CartContext);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <Row key={index} className="align-items-center mb-3">
              <Col md={4}>
                <Image src={item.imageUrl} fluid rounded />
              </Col>
              <Col md={2}>{item.title}</Col>
              <Col md={2}>${item.price}</Col>
              <Col md={2}>Qty: {item.quantity}</Col>
              <Col md={2}>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItem(item.title)}
                >
                  REMOVE
                </Button>
              </Col>
            </Row>
          ))
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
