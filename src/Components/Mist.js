import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Mist() {
  return (
    <>
      <Container fluid>
        <Container>
          <Row className="bg-info p-3 g-5">
            <Col lg={4} sm={12} className="">
              <div
                className="bg-light"
                style={{
                  borderTop: "5px solid grey",
                  borderBottom: "5px solid grey",
                }}
              >
                <h1 className="fw-bold">What is Mist?</h1>
                <p className="">
                  An offensive /defensive system that comabts food production
                  infections.
                </p>
              </div>
            </Col>
            <Col lg={8} sm={12}>
              <Row className="bg-light g-2" style={{}}>
                <Col lg={6} sm={12}>
                  <div>
                    <h1 className="text-center fw-bold">The Mist System</h1>
                  </div>
                </Col>
                <Col lg={6} sm={12}>
                  <div>
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
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
