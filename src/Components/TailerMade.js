import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import newsLetterImg from "../Assets/images/tailer_made.svg";

export default function TailerMade({ data, ourstory }) {
  console.log("This is Data", data);
  return (
    <>
      <Container
        fluid
        className="imageFULL mt-5"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${data.img_src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundBlendMode: "overlay",
          // opacity: "1",
          // filter: "brightness(80%)",
        }}
      >
        <Row>
          <Col lg={5} sm={12}></Col>
          <Col lg={6}>
            <div>
              <p
                className={
                  ourstory
                    ? "pt-5 fw-bold tailer-made-text1 color_story"
                    : "pt-5 fw-bold tailer-made-text1 color_txt"
                }
                style={{
                  fontSize: "1.8rem",
                  lineHeight: "2rem",
                }}
              >
                {data.text_1}
              </p>
              <Row>
                <Col lg={6} sm={12}></Col>
                <Col lg={6} sm={12}>
                  <div className="">
                    <p
                      // className=" text-justify"

                      style={{
                        fontSize: ".9rem",
                        color: "white",
                        borderBottom: "3px solid white",
                        textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {data.text_2}
                    </p>
                    <p
                      className="mb-4"
                      style={{
                        // textAlign: "right",

                        color: " #07f5df",
                        textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      <Link
                        to="/enquiry"
                        style={{
                          color: " #07f5df",
                        }}
                      >
                        Send us an enquiry directly {`>`}
                      </Link>
                    </p>
                  </div>
                </Col>
                <Col lg={1} sm={12}></Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
