import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-5" style={{ fontWeight: "bold" }}>
        ABOUT
      </h2>

      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4">
          <Image
            src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
            roundedCircle
            fluid
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </Col>

        <Col md={8}>
          <p>
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in the enduring of which
            were born in it? Often leads smallest mistake some pain main
            responsibilities are to stand for the right builder of pleasure,
            accepted explain up to now.
          </p>

          <p>
            The things we are accusing of these in the explication of the truth
            receives from the flattery of her will never be the trouble and they
            are refused to the pleasures and the pleasures of the pain, explain
            the treatment of excepturi of the blessed sufferings.
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur rebates. The distinction,
            that arise from or to. The greater, therefore, an obstacle to the
            duties of the debts receives the very great importance to us that
            these are consequent to that question is answered.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
