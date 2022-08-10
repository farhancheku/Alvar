import React from "react";
import logo from "../Assets/images/logo3.png";
import linkedinIcon from "../Assets/images/Linkdin.svg";
import youtubeIcon from "../Assets/images/Youtube.svg";
import emailIcon from "../Assets/images/email.svg";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Footer({
  comment0,
  comment1,
  comment2,
  comment3,
  comment4,
  link1,
  link2,
  link3,
  link4,
}) {
  return (
    <>
      <div className="">
        <Container
          fluid
          style={{
            backgroundColor: "#0c2c5b",
            fontFamily: "Roboto sans-serif",
            color: "white",
          }}
          className=" "
        >
          <Row className="d-flex p-5">
            <Col lg={4} sm={12} className="pt-5  text-center mx-auto">
              <Link to="/">
                {" "}
                <img
                  src={logo}
                  className="img-fluid footer-logo"
                  style={{ width: "20rem" }}
                  alt="logo"
                  // style={{ paddingLeft: "5vw" }}
                />
              </Link>
              <div className="">
                <div className="d-lg-flex d-none d-lg-block justify-content-center mt-3">
                  <div style={{ paddingLeft: "0.2vw" }}>
                    <a href="#">
                      <img src={emailIcon} alt="abc" />
                    </a>
                  </div>
                  <div style={{ paddingLeft: "0.2vw" }}>
                    <a href="#">
                      <img src={youtubeIcon} alt="abc" />
                    </a>
                  </div>
                  <div style={{ paddingLeft: "0.2vw" }}>
                    <a href="#">
                      <img src={linkedinIcon} alt="abc" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={2} sm={12} className=" text-left ">
              <h2 className="headings-123">Industry</h2>

              <ListGroup className="footerStyle  text-left">
                <ListGroup.Item>
                  {" "}
                  <a href={link1} className="white list-footer">
                    {comment0}
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href={link2} className="white list-footer">
                    {comment1}
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href={link3} className="white list-footer">
                    {comment2}
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href={link4} className="white list-footer">
                    {" "}
                    {comment3}
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <Link className="white list-footer">{comment4}</Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={2} sm={12}>
              <h2 className="headings-123">About Us</h2>
              <ListGroup>
                <ListGroup.Item className="list-footer">
                  What is Mist
                </ListGroup.Item>
                <ListGroup.Item className="list-footer">
                  Our Story
                </ListGroup.Item>
                <ListGroup.Item className="list-footer">Clients</ListGroup.Item>
                <ListGroup.Item className="list-footer">
                  Envirnoment Impact
                </ListGroup.Item>
                <ListGroup.Item className="list-footer">Team</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={2} sm={12}>
              <h2 className="headings-123">Contact us</h2>
              <ListGroup>
                <ListGroup.Item className="list-footer">Enquiry</ListGroup.Item>
                <ListGroup.Item className="list-footer">Support</ListGroup.Item>
                <ListGroup.Item className="list-footer">Careers</ListGroup.Item>
                <ListGroup.Item className="list-footer">Media</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={2} sm={12}>
              <h2 className="headings-123">More</h2>
              <ListGroup>
                <ListGroup.Item className="list-footer">News</ListGroup.Item>
                <ListGroup.Item className="list-footer">FAQ</ListGroup.Item>
              </ListGroup>
            </Col>
            <p className="pt-5 text-center">
              2021-2022 &copy; ALVAR All Right Reserved{" "}
            </p>
          </Row>
        </Container>
      </div>
    </>
  );
}
