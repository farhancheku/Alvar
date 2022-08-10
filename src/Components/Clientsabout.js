import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Clientsabout = ({ data }) => {
  return (
    <>
      <Container>
        <h1>Clients</h1>
        {data.map((item) => (
          <Row className="clients-about-row align-items-center my-3">
            <Col lg={2} md={2} sm={12}>
              <div className="clients-about-img">
                <Image style={{ width: "85%" }} src={item.img_src}></Image>{" "}
              </div>
            </Col>
            <Col lg={10} md={9} sm={12}>
              <div className="clients-about-div">
                <h3>{item.text_1}</h3>
                <p className="textmonial_text">{item.text_2}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Clientsabout;
