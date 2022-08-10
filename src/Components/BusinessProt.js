import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import engImg from "../Assets/images/enginner.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function BusinessProt({ data }) {
  return (
    <>
      <Container style={{maxWidth: "93%"}}>
        <Row className="g-4 p-5 px-9" style={{ justifyContent: "space-evenly" }}>
          <Col
            lg={3}
            md={6}
            sm={12}
            style={{
              borderTop: "3px solid grey",
              borderBottom: "3px solid grey",
            }}
            className="d-flex justify-content-center align-items-center "
          >
            <div className="">
              <h4 className="fw-bold text-justify" style={{ wordSpacing: "" }}>
                {data.heading_1}
              </h4>
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            sm={12}
            style={{
              borderTop: "3px solid grey",
              borderBottom: "3px solid grey",
            }}
            className="d-flex justify-content-center align-items-center "
          >
            <div>
              <h4 className="fw-bold text-justify">{data.heading_2}</h4>
              <p
                className="fw-bold"
                style={{
                  // textAlign: "right",
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
          <Col
            lg={4}
            md={6}
            sm={12}
            style={{
              borderTop: "3px solid grey",
              borderBottom: "3px solid grey",
            }}
          >
            <div className="">
              <p
                className="fs-6 pt-3"
                style={{
                  lineHeight: "17px",
                }}
              >
                {data.text_1}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
