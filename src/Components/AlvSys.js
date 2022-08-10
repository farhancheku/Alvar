import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import engImg from "../Assets/images/enginner.jpg";

export default function AlvSys() {
  return (
    <>
      <Container>
        <Row className="g-4 p-5" style={{ justifyContent: "space-evenly" }}>
          <Col
            lg={4}
            md={6}
            sm={12}
            style={{
              borderTop: "5px solid grey",
              borderBottom: "5px solid grey",
            }}
          >
            <div className="pt-lg-5 pb-lg-5 pt-sm-3 pb-sm-3">
              <img
                src={engImg}
                alt="abc"
                className=" img-fluid"
                // style={{ width: "103%", height: "103%" }}
              />
            </div>
          </Col>
          <Col
            lg={4}
            md={6}
            sm={12}
            style={{
              borderTop: "5px solid grey",
              borderBottom: "5px solid grey",
            }}
          >
            <div className="pt-2">
              <p className="text-left fs-4 pt-lg-4 pb-lg-4" style={{}}>
                Bacteria can attack business through multiple channels and area.
                For that Reason, at ALVAR we have developed mist produce to
                combate every possible source of infections,reducing food
                companies production and reputational risks protecting product
                and people.
              </p>
            </div>
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            style={{
              borderTop: "5px solid grey",
              borderBottom: "5px solid grey",
            }}
          >
            <div className="pt-5">
              <p className="fs-4">
                More that 160 ALVAR systems have been installed around the world
                with a high return on investment
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
