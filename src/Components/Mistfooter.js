import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo4.png";
import logo1 from "../Assets/images/bannerLogo.svg";
import linkedinIcon from "../Assets/images/Linkdin.svg";
import youtubeIcon from "../Assets/images/Youtube.svg";
import emailIcon from "../Assets/images/email.svg";
import "./Stylesheet/style.css";

const Mistfooter = ({
  comment0,
  comment1,
  comment2,
  comment3,
  comment4,
  link1,
  link2,
  link3,
  link4,
  backcolor,
  textcolor,
  envlink,
  faqlink,
  clientlink,
}) => {
  return (
    <>
      <div className="footer-container">
        <Container fluid style={{ background: backcolor, color: textcolor }}>
          <Row>
            <Col className="container-col" lg={6} md={6} sm={12}>
              <Row>
                <Col lg={8} md={8} sm={12}>
                  <Link to="/">
                    {" "}
                    <img
                      src={logo}
                      className="footer-logo"
                      style={{ width: "22rem" }}
                      alt="logo"
                      // style={{ paddingLeft: "5vw" }}
                    />
                  </Link>
                </Col>
                <Col className="box-footer" lg={4} md={4}>
                  <Link to="/">
                    {" "}
                    <img
                      src={logo1}
                      className="footer-logo2"
                      alt="logo"
                      // style={{ paddingLeft: "5vw" }}
                    />
                  </Link>
                  <div>
                    <div
                      className="footer-product"
                      style={{ border: `6px solid ${textcolor}` }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "1.4rem",
                          fontWeight: "450",
                        }}
                      >
                        PROTECT
                      </p>
                      <p
                        style={{
                          fontWeight: "600",
                          margin: "0px",
                          fontSize: "1.4rem",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "800",
                            textShadow: `0 0 1px ${textcolor}`,
                          }}
                        >
                          PRODUCT
                        </span>
                      </p>
                      <p
                        style={{
                          margin: "0px",
                          fontSize: "1.4rem",
                          fontWeight: "450",
                        }}
                      >
                        &PEOPLE
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12} className="container-column">
              <Row>
                <Col md={2} sm={12} className="text-center">
                  <div className="">
                    <div className="d-lg-flex d-none d-lg-block justify-content-center mt-4 flex-column">
                      <div style={{ paddingLeft: "0.2vw" }}>
                        <Link to="#">
                          <img src={emailIcon} alt="abc" />
                        </Link>
                      </div>
                      <div style={{ paddingLeft: "0.2vw",marginTop:"1px",marginBottom:"1px" }}>
                        <Link to="#">
                          <img src={youtubeIcon} alt="abc" />
                        </Link>
                      </div>
                      <div style={{ paddingLeft: "0.2vw" }}>
                        <Link to="#">
                          <img src={linkedinIcon} alt="abc" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  md={2}
                  sm={12}
                  className="footer-col"
                  style={{ borderLeft: `3px solid ${textcolor}` }}
                >
                  <h5 className="headings-123" style={{marginLeft: "10px",lineHeight: "2.2"}}>Solutions</h5>

                  <ul
                    className="footerStyle text-left"
                    style={{ lineHeight: "1.6", marginLeft: "10px" }}
                  >
                    <li>
                      {" "}
                      <Link
                        to={link1}
                        className="list-footer"
                        style={{ color: textcolor }}
                      >
                        {comment0}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={link2}
                        className="list-footer"
                        style={{ color: textcolor }}
                      >
                        {comment1}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={link3}
                        className="list-footer"
                        style={{ color: textcolor }}
                      >
                        {comment2}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={link4}
                        className="list-footer"
                        style={{ color: textcolor }}
                      >
                        {" "}
                        {comment3}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="list-footer"
                        style={{ color: "#0c2c5b" }}
                      >
                        {comment4}
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col
                  md={2}
                  sm={12}
                  className="footer-col"
                  style={{ borderLeft: `3px solid ${textcolor}` }}
                >
                  <h2 className="headings-123">
                    {envlink ? (
                      <Link to={envlink} style={{ color: textcolor, marginLeft: "10px" }}>
                        Env. Impact
                      </Link>
                    ) : (
                      <Link
                        to="/environmental-impact"
                        style={{ color: textcolor }}
                      >
                        Env. Impact
                      </Link>
                    )}
                  </h2>
                  <ul className="footerStyle text-left">
                    <li className="list-footer"></li>
                    <li className="list-footer"></li>
                    <li className="list-footer"></li>
                    <li className="list-footer"></li>
                    <li className="list-footer"></li>
                  </ul>
                </Col>
                <Col
                  md={2}
                  sm={12}
                  className="footer-col"
                  style={{ borderLeft: `3px solid ${textcolor}` }}
                >
                  <h5 className="headings-123" style={{marginLeft: "10px"}}>Contact us</h5>
                  <ul
                    className="footerStyle text-left my-1"
                    style={{ lineHeight: "1.6", marginLeft: "10px" }}
                  >
                    <li className="list-footer my-1">
                      <Link to={`/enquiry`} style={{ color: textcolor }}>
                        Enquiry
                      </Link>
                    </li>
                    <li className="list-footer">
                      <Link
                        to="/support"
                        className="list-footer"
                        style={{ color: textcolor}}
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </Col>

                <Col
                  md={1}
                  sm={12}
                  className="footer-col"
                  style={{ borderLeft: `3px solid ${textcolor}` }}
                >
                  <h2 className="headings-123" >More</h2>
                  <ul className="footerStyle text-left">
                    <li className="list-footer my-1">
                      <Link
                        to="/newspage"
                        className="list-footer"
                        style={{ color: textcolor }}
                      >
                        News
                      </Link>
                    </li>
                    <li className="list-footer my-1">
                      {faqlink ? (
                        <Link
                          to={faqlink}
                          className="list-footer"
                          style={{ color: textcolor }}
                        >
                          FAQ
                        </Link>
                      ) : (
                        <Link
                          to="/faqs"
                          className="list-footer"
                          style={{ color: textcolor}}
                        >
                          FAQ
                        </Link>
                      )}
                    </li>
                    <li className="list-footer">
                      {clientlink ? (
                        <Link
                          to={clientlink}
                          className="list-footer"
                          style={{ color: textcolor }}
                        >
                          Clients
                        </Link>
                      ) : (
                        <Link
                          to="/clients"
                          className="list-footer"
                          style={{ color: textcolor }}
                        >
                          Clients
                        </Link>
                      )}
                    </li>
                  </ul>
                </Col>
                <Col
                  md={3}
                  sm={12}
                  className="footer-col"
                  style={{ borderLeft: `3px solid ${textcolor}` }}
                >
                  <h2 className="headings-123" style={{marginLeft:"10px"}}>Media</h2>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="footer-text">
            <div style={{ color: textcolor }}>
              <p className="footer-text-p" style={{marginLeft: "30px",marginTop:"5px" }}>
                info@alvar.is
              </p>
              <p className="my-2">+354 5508300</p>
            </div>
            <p className="text-center" style={{ color: textcolor,marginTop:"5px" }}>
              2021-2022 &copy; ALVAR All Right Reserved{" "}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Mistfooter;
