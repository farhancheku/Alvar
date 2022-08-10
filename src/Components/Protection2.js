import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const Protection2 = ({data}) => {
    const {text_1, text_2} = data;
  return (
    <>
      <Container fluid style={{ width: "100%" }}>
        <div
          style={{
            fontFamily: "Roboto san-serif",
          }}
          className="pb-5 container "
        >
          <Row style={{ justifyContent: "space-evenly" }}>
            <Col
              lg={3}
              sm={12}
              style={{
                borderBottom: "3px solid grey",
              }}
              className="me-1 d-flex justify-content-center align-items-center flex-column mb-1"
            >
              <p
                className="fw-bold"
                style={{ fontSize: "large", marginBottom: "0px" }}
              >
                {text_1}
              </p>
            </Col>

            <Col
              lg={8}
              sm={12}
              style={{
                borderBottom: "3px solid grey",
              }}
              className="ms-lg-3 mb-1"
            >
              <p>{text_2}</p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Protection2