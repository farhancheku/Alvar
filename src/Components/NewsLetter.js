import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import newsLetterImg from "../Assets/images/71.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function NewsLetter({ data }) {
  return (
    <>
      <div className="pb-4">
        <Container
          fluid
          className="imageFULL"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${data.img_src})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Row>
            <Col lg={4} sm={12}></Col>
            <Col lg={7}>
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.2)",
                  // opacity: "0.4",
                  borderRadius: "5px",
                  color: "white",
                }}
                className="pt-4 pb-4 my-5 "
              >
                <Row className="" style={{ justifyContent: "space-evenly" }}>
                  <Col lg={4}>
                    <h4 className="ps-4 pt-3" style={{ color: "white" }}>
                      {data.text_1}
                    </h4>
                  </Col>
                  <Col lg={6}>
                    <p
                      className="pt-2 pb-1"
                      style={{ borderTop: "solid 2px white" }}
                    >
                      {data.text_2}
                    </p>
                    <p
                      className=""
                      style={{
                        textAlign: "right",
                        color: " #07f5df",
                        textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      <Link
                        to="/alvarnews"
                        style={{
                          color: " #07f5df",
                        }}
                      >
                        Sign up for newsletter &#10095;
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
