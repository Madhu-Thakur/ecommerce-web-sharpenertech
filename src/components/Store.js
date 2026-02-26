import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function Store() {
  const { addToCart } = useContext(CartContext);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">MUSIC</h2>

      <Row>
        {productsArr.map((product) => (
          <Col md={6} key={product.id} className="mb-4">
            <Card>
              <Link to={`/store/${product.id}`}>
                <Card.Img variant="top" src={product.imageUrl} />
              </Link>

              <Card.Body className="text-center">
                <Link
                  to={`/store/${product.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card.Title>{product.title}</Card.Title>
                </Link>

                <Card.Text>${product.price}</Card.Text>

                <Button variant="info" onClick={() => addToCart(product)}>
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Store;