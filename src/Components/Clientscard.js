import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Clientscard = ({ data }) => {
  return (
    <>
      <Container>
        <Row>
          {data.map((item) => (
            <Col lg={4} md={4} sm={12} key={item.text_1}>
              <Card
                className="clients-card"
                style={{ width: "23rem", height: "30rem", border: "none" }}
              >
                <Card.Img variant="top" src={item.img_src} alt="img" />
                <Card.Body>
                  <Card.Title>{item.text_1}</Card.Title>
                  <Card.Text>{item.text_2}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Clientscard;
