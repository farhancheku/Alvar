import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function SysComp_1({ data }) {
  return (
    <>
      <div className="">
        <Container
          fluid
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${data.img_src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "cover",
          }}
          className="imageFULL py-4 "
        >
          <Row>
            <Col lg={4} sm={12}></Col>
            <Col lg={7}>
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.4)",
                  // opacity: "0.4",
                  borderRadius: "5px",
                  color: "white",
                }}
                className="pt-0   mt-3 mb-3 syscomp-container"
              >
                <Row className="" style={{ justifyContent: "space-between" }}>
                  <Col lg={5} className="">
                    <h4
                      className="ps-4 pt-3 fw-bold "
                      style={{ color: "black", lineHeight: "1.5" }}
                    >
                      {data.text_1}
                    </h4>
                  </Col>
                  <Col lg={1}></Col>
                  <Col lg={6} className="pt-3">
                    <p
                      className="  "
                      style={{
                        borderBottom: "solid 2px black",
                        color: "black",
                      }}
                    >
                      {data.text_2}
                    </p>
                    <p
                      className="fw-bold  "
                      style={{
                        textAlign: "left",
                        color: " #07f5df",
                        // textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      <Link
                        to="/our-team"
                        style={{
                          color: " #07f5df",
                        }}
                      >
                        Read more about our team &#10095;
                      </Link>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
