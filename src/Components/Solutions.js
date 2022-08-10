import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import engImg from "../Assets/images/enginner.jpg";
import oneEng from "../Assets/images/oneEng.jpg";

export default function Solutions() {
  return (
    <>
      <Container>
        <Row className="pt-lg-5 pb-lg-5">
          <Col lg={3} md={6} sm={12} style={{ justifyContent: "space-evenly" }}>
            <div>
              <h1> Our Solutions</h1>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content
              </p>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <Card>
              <Card.Img varient="top" src={oneEng} />
              <Card.Body>
                <Card.Title>Mist Core</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <Card>
              <Card.Img varient="top" src={oneEng} />
              <Card.Body>
                <Card.Title>Mist Core</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <Card>
              <Card.Img varient="top" src={oneEng} style={{ height: "" }} />
              <Card.Body>
                <Card.Title>Mist Core</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <Card>
              <Card.Img varient="top" src={oneEng} />
              <Card.Body>
                <Card.Title>Mist Core</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}