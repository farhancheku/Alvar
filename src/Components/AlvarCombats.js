import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function AlvarCombat({ data }) {
  const cardInfo = [
    {
      image: data[0].img_src,
      link: "/sea-food",
      title: (
        <div
          style={{ backgroundColor: "#0098da61" }}
          className="pt-3 pb-3 text-center g-0"
        >
          <span style={{ fontSize: "0.8rem" }} className="py-2 ps-lg-2 pe-2">
            {data[0].title}
          </span>
          <span
            className=" Industry-title-combat"
            style={{ fontSize: "1.2rem" }}
          >
            INDUSTRY
          </span>
        </div>
      )
    },
    {
      image: data[1].img_src,
      link: "/meat",
      title: (
        <div
          style={{ backgroundColor: "#952b3680" }}
          className="pt-3 pb-3 text-center"
        >
          <span style={{ fontSize: "0.8rem" }} className="p-2">
            {data[1].title}
          </span>
          <span
            className=" Industry-title-combat"
            style={{ fontSize: "1.2rem" }}
          >
            INDUSTRY
          </span>
        </div>
      ),
    },
    {
      image: data[2].img_src,
      link: "/poultry",
      title: (
        <div
          style={{ backgroundColor: "#ecb53380" }}
          className="pt-3 pb-3 text-center"
        >
          <span style={{ fontSize: "0.8rem" }} className="p-1 ">
            {data[2].title}
          </span>
          <span
            className="Industry-title-combat"
            style={{ fontSize: "1.2rem" }}
          >
            INDUSTRY
          </span>
        </div>
      ),
    },
    {
      image: data[3].img_src,
      link: "/salmon",
      title: (
        <div
          style={{ backgroundColor: "#ee6e5470" }}
          className="pt-3 pb-3 text-center"
        >
          <span style={{ fontSize: "0.8rem" }} className="p-1">
            {data[3].title}
          </span>
          <span
            className="Industry-title-combat"
            style={{ fontSize: "1.2rem" }}
          >
            INDUSTRY
          </span>
        </div>
      ),
    },
  ];
  return (
    <>
      <Container>
        <Row style={{ justifyContent: "space-evenly" }} className="pt-lg-5 g-0">
          <Col lg={3} md={12} sm={12}>
            <Row className="g-0">
              <Col lg={8}>
                <h4 className=" fw-bold pt-3">
                  Find out how ALVAR combats food infections in your industry
                </h4>
              </Col>
              <Col lg={4}></Col>
            </Row>
          </Col>
          {cardInfo.map((cards) => (
            <Col lg={2} md={6} xs={6} className="mt-2 ">
              <Link to={cards.link}>
                <Card className="cardfoodd">
                  <Card.ImgOverlay style={{padding:"0px"}}>
                    <Card.Title style={{ color: "white" }}>
                      {cards.title}
                    </Card.Title>
                  </Card.ImgOverlay>
                  <Card.Img
                    src={cards.image}
                    alt="abc"
                    className="img-fluid "
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
