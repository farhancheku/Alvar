import React, { useState } from "react";
import {
  Container,
  Button,
  Navbar,
  Offcanvas,
  Nav,
  Dropdown,
} from "react-bootstrap";
import logo from "../Assets/images/bannerLogo.svg";
// import logo2 from "../Assets/images/logo2.svg";
import linkedinIcon from "../Assets/images/Linkdin.svg";
import youtubeIcon from "../Assets/images/Youtube.svg";
import emailIcon from "../Assets/images/email.svg";
import menuBar from "../Assets/images/menuBar.svg";
import featherFlag from "../Assets/images/featherFlag.svg";
import hands from "../Assets/images/hands.png";
import groupnav from "../Assets/images/groupnav.png";
import { Link } from "react-router-dom";
import "./Stylesheet/style.css";
import $ from "jquery";
export default function Mistnavb({
  bgColor,
  comment0,
  comment1,
  comment2,
  comment3,
  comment4,
  link1,
  link2,
  link3,
  link4,
  envlink,
  faqlink,
  clientlink,
}) {
  const [show, setShow] = useState(false);
  const [menuItem, setMenuItem] = useState("");
  const [menuItems, setMenuItems] = useState("SOLUTIONS");
  const handleClose = () => {
    setShow(false);
    setMenuItem("");
    setMenuItems("SOLUTIONS");
  };
  const handleShow = () => setShow(true);

  const handleShowMenuItem = (name) => {
    if (name === menuItem) {
      setMenuItem("");
    } else {
      setMenuItem(name);
      setMenuItems("");
    }
  };

  const [expand, setExpand] = useState("");
  document.addEventListener("scroll", () => {
    if (window.pageYOffset >= 10) {
      setExpand("");
    } else {
      setExpand("lg");
    }
  });
  // console.log(bgColor, "bg color");
  return (
    <>
      <Navbar
        expand=""
        fixed="top"
        bg="light"
        style={{ position: "sticky" }}
        className=""
      >
        <Container>
          <Navbar.Brand to="#home">
            <Link to="/">
              {" "}
              <img src={logo} alt="abc" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <>
            <div className="d-lg-flex me-auto d-none d-lg-block">
              <Nav.Link to="/discover-our-technology">
                <Button className="btn-nav" style={{ fontSize: "1vw" }}>
                  <Link to="/discover-our-technology" className="white">
                    Discover Our Technology
                  </Link>
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="primary"
                    id="dropdown-basic"
                    className="btn-nav btn btn-primary"
                  >
                    Talk With US
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="nav-dropdown">
                    <div>
                      <img
                        src={logo}
                        alt="logo"
                        style={{ margin: "35px 30px", height: "45px" }}
                      />{" "}
                    </div>
                    <div className="talkwithus">
                      <li>
                        <img src={hands} alt="img1" />
                        <div
                          style={{
                            left: "15%",
                            borderBottom: "2px solid rgb(7, 245, 223)",
                            margin: "0 10rem 0 0",
                          }}
                        >
                          <Link to="/enquiry">
                            Contact Alvar For <br /> Enquiry
                          </Link>
                        </div>
                      </li>
                      <li style={{ textAlign: "right" }}>
                        <img src={groupnav} alt="img2" />
                        <div
                          style={{
                            borderBottom: "2px solid rgb(7, 245, 223)",
                            left: "-15%",
                            margin: "0 0 0 10rem",
                          }}
                        >
                          <Link to="/support">
                            Contact Alvar For <br /> Support
                          </Link>
                        </div>
                      </li>{" "}
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </div>
          </>
          <div className="d-flex">
            <div className="d-lg-flex d-none d-lg-block">
              {expand && (
                <>
                  {" "}
                  <div style={{ paddingLeft: "0.2vw" }}>
                    <Link to="/">
                      <img src={emailIcon} alt="abc" />
                    </Link>
                  </div>
                  <div style={{ paddingLeft: "0.2vw" }}>
                    <Link to="/">
                      <img src={youtubeIcon} alt="abc" />
                    </Link>
                  </div>
                  <div style={{ paddingLeft: "0.2vw" }}>
                    <Link to="/">
                      <img src={linkedinIcon} alt="abc" />
                    </Link>
                  </div>
                </>
              )}
            </div>

            <div>
              <div style={{ paddingLeft: "4.3vw" }}>
                <img
                  src={menuBar}
                  alt="abc"
                  onClick={handleShow}
                  className="img-fluid"
                  style={{ cursor: "pointer" }}
                />
              </div>
              {/* ================================OFFCANVAS MENU================================= */}
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="top"
                style={{
                  backgroundColor: bgColor,
                }}
              >
                <Offcanvas.Header
                  closeButton
                  // style={{ backgroundColor: "#898989" }}
                  // style={{
                  //   backgroundColor: " rgb(45, 45, 71) !important",
                  //   opacity: "0.8",
                  // }}
                >
                  <Offcanvas.Title
                  // style={{
                  //   backgroundColor: " rgb(45, 45, 71) !important",
                  //   opacity: "0.8",
                  // }}
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body
                  // style={{ backgroundColor: "#898989" }}
                  // style={{
                  //   backgroundColor: " rgb(45, 45, 71) !important",
                  //   opacity: "0.8",
                  // }}
                  className=" px-5"
                >
                  <div
                    className="line-offcanvas"
                    style={{
                      backgroundColor: "#fff",
                      width: "2px",
                      height: "25rem",
                      position: "absolute",
                      // right: "50%",
                      left: "40%",
                    }}
                  ></div>
                  <div className="white">
                    <div className="dropdown w-100" style={{ height: "113px" }}>
                      <button
                        className="dropbtn w-100 ps-4"
                        style={
                          menuItem === "SOLUTIONS" || menuItems === "SOLUTIONS"
                            ? { borderBottom: "2px solid #fff" }
                            : {}
                        }
                        onClick={() => handleShowMenuItem("SOLUTIONS")}
                      >
                        SOLUTIONS
                      </button>
                      <div className="dropdown-content white">
                        {menuItem === "SOLUTIONS" && (
                          <>
                            <Link to={link1} className="white">
                              {comment0}
                            </Link>
                            <Link to={link2} className="white">
                              {comment1}
                            </Link>
                            <Link to={link3} className="white">
                              {comment2}
                            </Link>
                            <Link to={link4} className="white">
                              {comment3}
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="dropdown w-100" style={{ height: "70px" }}>
                      <Link to={envlink} className="white">
                        <button
                          className="dropbtn w-100 "
                          style={
                            menuItem === "aboutus"
                              ? { borderBottom: "2px solid #fff" }
                              : {}
                          }
                          onClick={() => handleShowMenuItem("aboutus")}
                        >
                          ENVIRONMENTAL <br /> IMPACTS
                        </button>
                      </Link>
                      <div className="dropdown-content">
                        {menuItem === "aboutus" && <></>}
                      </div>
                    </div>
                    <div className="dropdown w-100" style={{ height: "90px" }}>
                      <button
                        className="dropbtn w-100 ps-4"
                        style={
                          menuItem === "contactus"
                            ? { borderBottom: "2px solid #fff" }
                            : {}
                        }
                        onClick={() => handleShowMenuItem("contactus")}
                      >
                        CONTACT US
                      </button>
                      <div className="dropdown-content">
                        {menuItem === "contactus" && (
                          <>
                            <Link to="/enquiry" className="white">
                              ENQUIRY
                            </Link>
                            <Link to="/support" className="white">
                              SUPPORT
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="dropdown w-100" style={{ height: "90px" }}>
                      <button
                        className="dropbtn w-100 ps-5"
                        style={
                          menuItem === "more"
                            ? { borderBottom: "2px solid #fff" }
                            : {}
                        }
                        onClick={() => handleShowMenuItem("more")}
                      >
                        MORE
                      </button>
                      <div className="dropdown-content">
                        {menuItem === "more" && (
                          <>
                            <Link to="/newspage" className="white">
                              NEWS
                            </Link>
                            {faqlink ? (
                              <Link to={faqlink} className="white">
                                FAQS
                              </Link>
                            ) : (
                              <Link to="/faqs" className="white">
                                FAQS
                              </Link>
                            )}
                            {clientlink ? (
                              <Link to={clientlink} className="white">
                                CLIENTS
                              </Link>
                            ) : (
                              <Link to="/clients" className="white">
                                CLIENTS
                              </Link>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="dropdown w-100">
                      <Link to="/underconstruction/MEDIA" className="white">
                        <button
                          className="dropbtn w-100 ps-5"
                          style={
                            menuItem === "media"
                              ? { borderBottom: "2px solid #fff" }
                              : {}
                          }
                          onClick={() => handleShowMenuItem("media")}
                        >
                          MEDIA
                        </button>
                      </Link>
                      <div
                        className="dropdown-content 
                      "
                      >
                        {menuItem === "media" && <></>}
                      </div>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            {expand && (
              <>
                <div
                  style={{ paddingLeft: "2vw" }}
                  className="d-none d-lg-block"
                >
                  <img src={featherFlag} alt="abc" />
                </div>
              </>
            )}
          </div>{" "}
        </Container>
      </Navbar>{" "}
    </>
  );
}
