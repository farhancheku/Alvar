import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import worker from "../Assets/images/worker.jpg";

export default function BusinessChannel() {
  return (
    <>
      <Container>
        <Row className="g-4 p-5" style={{ justifyContent: "space-evenly" }}>
          <Col
            lg={5}
            sm={12}
            style={{
              borderTop: "5px solid grey",
              //   borderBottom: "5px solid grey",
              //   width: "47%",
            }}
          >
            <div className="pt-5 pb-5">
              <h1 className="p-2">
                Successfully tried and tested in a world-leading food production
                industry, Iceland's fishes.
              </h1>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </div>
          </Col>

          <Col
            lg={6}
            sm={12}
            style={{
              borderTop: "5px solid grey",
              //   borderBottom: "5px solid grey",
              //   width: "47%",
            }}
          >
            <div className=" pt-5 pb-5  ">
              <img src={worker} alt="abc" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
