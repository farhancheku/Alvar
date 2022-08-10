import React from "react";
import Group9360 from "../Assets/images/Group9360.png";
import { Container, Row, Col } from "react-bootstrap";

const Savingscomp = ({ data }) => {
  return (
    <>
      <Container
        style={{ margin: "", padding: "", width: "100%" }}
        className="pt-5 container "
      >
        <Row className="mt-4 pt-3">
          <Col></Col>
          <Col
            lg={5}
            md={12}
            sm={12}
            style={{ borderTop: "3px solid grey", padding: "10px" }}
            className="mx-3 d-flex justify-content-center align-content-center flex-column pt-4 "
          >
            <Row style={{ justifyContent: "space-evenly" }} className="mt-3">
              <Col md={6} sm={6}>
                <h3>90+%</h3>
                <p>
                  Water <br /> Savings
                </p>
              </Col>
              <Col md={6} sm={6}>
                <h3>70+%</h3>
                <p>
                  Chemical <br /> Savings
                </p>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6} sm={6}>
                <h3>100%</h3>
                <p>
                  Labour <br /> Savings
                </p>
              </Col>
              <Col md={6} sm={6}>
                <h3>2 Days</h3>
                <p>
                  increase <br /> in shelf life
                </p>
              </Col>
            </Row>
          </Col>

          <Col
            lg={6}
            md={12}
            sm={12}
            style={{ borderTop: "3px solid grey", padding: "" }}
            className="mx-3 d-flex justify-content-center align-content-center  pt-4"
          >
            {/* <img style={{ height: "85%" }} src={Group9360} alt="img" /> */}
            <iframe
              src={data.videoSrc}
              style={{ background: "rgba(0,0,0,0.1)" }}
              width="99%"
              height="302"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Savingscomp;
