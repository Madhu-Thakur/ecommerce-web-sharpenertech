import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  const tours = [
    { date: "JUL16", place: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL19", place: "TORONTO, ON", venue: "BUDWEISER STAGE" },
    { date: "JUL22", place: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
    { date: "JUL29", place: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
    { date: "AUG2", place: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
    { date: "AUG7", place: "CONCORD, CA", venue: "CONCORD PAVILION" },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "#777",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1 style={{ fontSize: "60px" }}>The Generics</h1>

        <Button
          variant="outline-info"
          className="mt-4"
          style={{ padding: "10px 30px" }}
        >
          Get our Latest Album
        </Button>

        <div className="mt-4">
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              border: "2px solid #0dcaf0",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ▶
          </div>
        </div>
      </div>

      <Container className="mt-5 mb-5">
        <h2 className="text-center mb-4">TOURS</h2>

        {tours.map((tour, index) => (
          <Row
            key={index}
            className="align-items-center border-bottom py-3"
          >
            <Col md={2}><strong>{tour.date}</strong></Col>
            <Col md={3}>{tour.place}</Col>
            <Col md={4}>{tour.venue}</Col>
            <Col md={3} className="text-md-end">
              <Button variant="info">BUY TICKETS</Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Home;
