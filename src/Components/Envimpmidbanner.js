import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Envimpmidbanner = ({ data }) => {
  return (
    <>
      <div className="pb-5">
        <Container
          fluid
          className="imageFULL"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${data.img_src})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Row>
            <Col lg={5} sm={12}></Col>
            <Col lg={6}>
              <div
                style={{ borderTop: "solid 2px white", color: "white" }}
                className=" my-5 "
              >
                <Row className="" style={{ justifyContent: "space-evenly" }}>
                  <Col lg={5}>
                    <p className="pt-2 ">{data.text_1}</p>
                  </Col>
                  <Col lg={6}>
                    <p className="pt-2 ">{data.text_2}</p>
                    <p
                      className=""
                      style={{
                        textAlign: "right",
                        color: " #07f5df",
                        textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      <Link
                        to="/discover-our-technology"
                        style={{
                          color: " #07f5df",
                          fontSize: "15px",
                        }}
                      >
                        Read more about our technology &#10095;
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
};

export default Envimpmidbanner;
