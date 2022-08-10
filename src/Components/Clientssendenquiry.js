import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Clientssendenquiry({ data }) {
  return (
    <>
      <div className="mt-5 mb-5">
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
            <Col lg={3} sm={12}></Col>
            <Col lg={8}>
              <div
                style={
                  {
                    // opacity: "0.4",
                  }
                }
                className="pt-0   mt-3 mb-3 syscomp-container"
              >
                <Row className="" style={{ justifyContent: "space-between" }}>
                  <Col lg={5} className="">
                    <h4
                      className="ps-4 pt-1 fw-bold "
                      style={{ color: "white", lineHeight: "1.5"  }}
                    >
                      {data.text_1}
                    </h4>
                  </Col>

                  <Col lg={6} className="pt-1">
                    <p
                      className="  "
                      style={{
                        borderBottom: "solid 2px white",
                        color: "white",
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
                        {data.text_3}
                      </Link>
                    </p>
                  </Col>
                  <Col lg={1}></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
