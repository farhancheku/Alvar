import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import view from "../Assets/images/view.jpg";

export default function Environment() {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${view})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <Container>
          <Row className="p-5">
            <Col lg={4}></Col>
            <Col lg={7} style={{ borderTop: "5px solid grey" }}>
              <Row>
                <Col
                  lg={4}
                  className="pt-lg-5 pb-lg-5 pt-sm-2 pb-sm-2 ps-1 pe-1 "
                >
                  <h4 className="fw-bold">Our PlanFor Save the Enviorment</h4>
                </Col>
                <Col lg={8}>
                  <h4 className="pt-5 pe-5 fw-bold">
                    Tailor-made mist systems that combat bacteria and fight
                    costs
                  </h4>
                  <p className="pt-5 ps-5" style={{ color: "white" }}>
                    Our engineering team will customise ALVAR’s technology with
                    a guarantee for success.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
