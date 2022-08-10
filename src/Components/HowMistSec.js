import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import group from "../Assets/images/76.png";
import "./Stylesheet/style.css";
import logo from "../Assets/images/logo4.png";
import data from "../Data/Homedata";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function HowMist({ data }) {
  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${group})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%"
        }}
        className="img-fluid pb-4 mt-3"
      >
        <Row>
          <Col lg={2} className="mist_log"></Col>
          <Col lg={3} className="mist_log">
            {data.logo_img && (
              <div className="d-flex justify-content-center mt-5">
                <Image
                  className=""
                  src={logo}
                  style={{ width: "80%" }}
                  alt="haris munir"
                ></Image>
              </div>
            )}
          </Col>
          <Col lg={7}>
            <Row className="mt-2">
              <Col lg={5}>
                <div className=" howmist-h2 ">
                  <h2
                    className="fw-bold"
                    style={{
                      fontSize: "26px",
                    }}
                  >
                    How is the Mist deployed?
                  </h2>
                </div>
              </Col>
              <Col lg={6}>
                <div
                  className=" howmist-p"
                  style={{
                    paddingBottom: "8vw",

                    // borderBottom: "solid 2px grey",
                  }}
                >
                  <p
                    style={{
                      lineHeight: "1.1",
                      borderBottom: "1px solid black",
                      paddingBottom: "2px",
                    }}
                  >
                    {data.text_1}
                  </p>

                  <p className="">
                    <span>
                      {" "}
                      <Link
                        to="/underconstruction"
                        style={{
                          color: " #07f5df",
                        }}
                      >
                        Read more
                      </Link>
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
