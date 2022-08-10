import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Mist2() {
  return (
    <>
      <Container fluid style={{ width: "100%" }}>
        <div
          style={{
            // paddingLeft: "6vw",
            // paddingRight: "6vw",
            fontFamily: "Roboto san-serif",
          }}
          className="py-5 container "
        >
          <Row style={{ justifyContent: "space-evenly" }}>
            <Col
              lg={3}
              sm={12}
              style={{
                borderTop: "5px solid grey",
                borderBottom: "5px solid grey",
              }}
              className="me-1 p-5"
            >
              <h1 className="fw-bold">What is Mist?</h1>
              <p className="pt-2">
                An offensive /defensive system that comabts food production
                infections.
              </p>
            </Col>

            <Col
              lg={8}
              sm={12}
              style={{
                borderTop: "5px solid grey",
                borderBottom: "5px solid grey",
              }}
              className="ms-3"
            >
              <Row className="g-3">
                <Col lg={6} sm={6}>
                  <h1 className="text-center pt-5 fw-bold">The Mist System</h1>
                </Col>
                <Col lg={6} sm={6} className="pt-5">
                  <p>
                    ALVAR has developed an efficient technology for assisting
                    food producers who are looking for better , faster , safer
                    and more cost effective ways to produce food whice
                    increasing value
                    <br />
                    <br />
                    ALVAR answers this need with a pragmatic and holistic
                    technology which is backed with a guarantee for success.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
