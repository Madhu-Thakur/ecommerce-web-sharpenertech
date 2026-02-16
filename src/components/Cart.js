import React, {useState} from "react";
import {Modal, Button, Row, Col, Image} from "react-bootstrap";

const initialCartElements = [
    {
        title: "Colors",
        price: 100,
        imageUrl :  "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 2,
    },
     {
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

function Cart({show, handleClose}) {
    const [cartElements, setCartElements] = useState(initialCartElements);

    const removeItem = (title) => {
        const updatedItems = cartElements.filter(item => item.title !== title);
        setCartElements(updatedItems);
    };

    return (
         <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cartElements.map((item, index) => (
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
        ))}
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