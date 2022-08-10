import React from "react";
import { Col, Container, Image, Row, Card } from "react-bootstrap";

const Founder = ({ data }) => {
  return (
    <>
      <Container className="founder_main">
        <Row className="justify-content-center">
          <Col lg={4} md={4} style={{}} className="founder_profile ">
            <Card
              className="founder_profile_border "
              style={{
                width: "18rem",
                height: "22rem",
                border: "2px solid #04355E",
                borderRadius:"0px"

                // boxshadow: 5px 10px;
              }}
            >
              <Card.Img
                variant="top"
                src={data.img_src}
                style={{ padding: "10px" }}
              />
              <Card.Body>
                <Card.Title>{data.position}</Card.Title>
                <Card.Text>{data.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={8} className="founder_text">
            <p className="mt-4 ">{data.description}</p>
          </Col>
        </Row>
        <hr
          style={{
            width: "45%",
            border: "1.8px  solid #575757 ",
            opacity: "0.9",
          }}
          className="founder_borderline"
        ></hr>
      </Container>
    </>
  );
};

export default Founder;
