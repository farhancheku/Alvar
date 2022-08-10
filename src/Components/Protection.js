import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// export default function Protection({ comment1, comment2, comment3, comment4 }) {
export default function Protection({ data2, reverse, content1}) {
const { question_1, anw_1, text_1, text_2, text_3 } = data2;
  return (
    <>
      <Container fluid style={{ width: "100%"}}>
        <div
          style={{
            fontFamily: "Roboto san-serif",
          }}
          className="pt-5 container"
        >
          <Row
            style={{ justifyContent: "space-evenly" }}
            className={reverse ? "d-flex flex-row-reverse" : ""}
          >
            <Col
              lg={3}
              sm={12}
              style={{
                borderTop: "3px solid grey",
                borderBottom: "3px solid grey",
              }}
              className="me-1 d-flex justify-content-center align-items-center flex-column mb-1"
            >
              <p
                className="fw-bold ans_para"
                style={{ fontSize: "x-large", marginBottom:"0px"}}
              >
                {question_1}
              </p>
              <div className="mb-1" style={{paddingTop:"5px"}}>
                <p className={anw_1 ? "mist_para mt-5 mb-5 " : ""}>
                  {anw_1}
                </p>
              </div>
            </Col>
            {reverse ? (
              <Col
                lg={8}
                sm={12}
                style={{
                  borderTop: "3px solid grey",
                  borderBottom: "3px solid grey",
                }}
                className="ms-lg-3 mb-1"
              >
                <p className="mist_para mt-5">{text_2}</p>
              </Col>
            ) : (
              <Col
                lg={8}
                sm={12}
                style={{
                  borderTop: "3px solid grey",
                  borderBottom: "3px solid grey",
                }}
                className="ms-lg-3 mb-1"
              >
                <Row className="g-3">
                  <Col
                    lg={6}
                    sm={6}
                    className={
                      text_3
                        ? "d-flex justify-content-center align-items-center"
                        : "d-flex justify-content-center align-items-center"
                    }
                  >
                    <div className="">
                      <p
                        className={
                          text_3
                            ? "fw-bold  text-8786 mt-4 "
                            : "fw-bold  text-8786 "
                        }
                        style={{ fontSize: "x-large" }}
                      >
                        {text_3 ? text_1 : `‘’${text_1}’’`}
                      </p>
                    </div>
                  </Col>
                  <Col
                    lg={6}
                    sm={6}
                    className={
                      text_3 ? "pt-2 pb-2 ps-5 pe-4" : "pt-3 pb-3 ps-5 pe-4"
                    }
                  >
                    <p className="mist_para">{text_2}</p>
                    <p className="mist_para">{text_3}</p>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </div>
      </Container>
    </>
  );
}
