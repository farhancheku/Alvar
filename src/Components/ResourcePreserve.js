import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ResourcePreserve({ data, data_para }) {
  console.log(data, "water");
  return (
    <>
      <Container>
        <Row style={{ justifyContent: "space-evenly" }} className="pt-lg-1">
          <Col
            lg={3}
            md={12}
            sm={12}
            className="d-flex justify-content-center flex-column"
          >
            <h4 className=" fw-bold" style={{ paddingRight: "2vw" }}>
              {data_para.text_1}
            </h4>
            <p className="pt-5 mt-5" style={{ borderBottom: "2px solid grey" }}>
              {data_para.text_2}
            </p>
            <div className="">
              <p
                className="fw-bold d-flex justify-content-start align-items-start"
                style={{
                  textAlign: "left",
                  color: " #07f5df",
                  // textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
                }}
              >
                <Link
                  to="/environmental-impact"
                  style={{
                    color: " #07f5df",
                  }}
                >
                  Read more {`>`}
                </Link>
              </p>
            </div>
          </Col>
          <Col lg={1} md={12} sm={12}></Col>
          {data.map((cards) => (
            <Col lg={2} md={6} xs={6} className="mt-2">
              <Link to="/environmental-impact">
                <Card className="preserCard">
                  <Card.Img
                    src={cards.img_src}
                    alt="abc"
                    style={{
                      objectFit: "fill",
                      padding: "0",
                      borderRadius: "0",
                    }}
                    className="preCardImg"
                  />
                  <Card.Body className="preCardBody">
                  </Card.Body>
                    <Card.Footer style={{ backgroundColor: "#00b894" }}>
                      {cards.title}
                    </Card.Footer>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
