import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function IndustryButtons() {
  return (
    <>
      <Container className="pt-3">
        <Row className="pt-5"
        style={{marginLeft:"35px"}} >
          <Col lg={3} md={6} sm={12}>
            <div className="pt-2">
              <div
                className="text-center"
                style={{
                  backgroundColor: "#0098DA",
                  // paddingLeft: "1vw",
                  paddingRight: "2vw",
                  paddingTop: "0.7vw",
                  paddingBottom: "0.7vw",
                  color: "white",
                }}
              >
                <Link to="/sea-food" className="white">
                  <span className="" style={{fontSize:"9pt"}}>
                    SEAFOOD
                  </span>
                  <span
                    style={{ fontSize: "", fontWeight: "600", opacity: "0.5" }}
                    className=" ps-1"
                  >
                    INDUSTRY
                  </span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="pt-2">
              <div
                className="text-center"
                style={{
                  backgroundColor: "#952B36",
                  paddingLeft: "1vw",
                  paddingRight: "5.5vw",
                  paddingTop: "0.7vw",
                  paddingBottom: "0.7vw",
                  color: "white",
                }}
              >
                <Link to="/meat" className="white">
                  <span className="" style={{fontSize:"9pt"}}>
                    MEAT
                  </span>
                  <span
                    style={{ fontSize: "", fontWeight: "600", opacity: "0.5" }}
                    className="ps-1"
                  >
                    INDUSTRY
                  </span>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="pt-2">
              <div
                className="text-center"
                style={{
                  backgroundColor: "#ECB533",
                  paddingLeft: "1vw",
                  paddingRight: "5.5vw",
                  paddingTop: "0.7vw",
                  paddingBottom: "0.7vw",
                  color: "white",
                }}
              >
                <Link to="/poultry" className="white ms-4">
                  <span className="" style={{fontSize:"9pt"}}>
                    POULTRY
                  </span>
                  <span
                    style={{ fontSize: "", fontWeight: "600", opacity: "0.5" }}
                    className="ps-1"
                  >
                    INDUSTRY
                  </span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="pt-2">
              <div
                className="text-center"
                style={{
                  backgroundColor: "#EE6E54",
                  paddingLeft: "1vw",
                  paddingRight: "5.5vw",
                  paddingTop: "0.7vw",
                  paddingBottom: "0.7vw",
                  color: "white",
                }}
              >
                <Link to="/salmon" className="white">
                  <span className="" style={{fontSize:"9pt"}}>
                    SALMON
                  </span>
                  <span
                    style={{ fontSize: "", fontWeight: "600", opacity: "0.5" }}
                    className="ps-1"
                  >
                    INDUSTRY
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
