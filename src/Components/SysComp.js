import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function SysComp({ data }) {
  return (
    <>
      <div className="">
        <Container
          fluid
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),url(${data.img_src})`,
            backgroundRepeat: "no-repeat",
          }}
          className="imageFULL "
        >
          <Row>
            <Col lg={4} sm={12}></Col>
            <Col lg={7}>
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  // opacity: "0.4",
                  borderRadius: "5px",
                  color: "white",
                }}
                className="pt-0 pb-1 mt-3 mb-3 syscomp-container"
              >
                <Row className="" style={{ justifyContent: "space-between" }}>
                  <Col lg={12}>
                    <h4
                      className="ps-4 pt-3 fw-bold "
                      style={{ color: "black", lineHeight: "1.5" }}
                    >
                      {data.text_1}
                    </h4>
                  </Col>
                  <Col lg={6}></Col>
                  <Col lg={6}>
                    <p
                      className="  ps-2"
                      style={{
                        borderBottom: "2px solid white",
                        color: "white",
                      }}
                    >
                      {data.text_2}
                    </p>
                    <p
                      className="fw-bold mx-3 "
                      style={{
                        textAlign: "right",
                        color: "#07f5df",
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
