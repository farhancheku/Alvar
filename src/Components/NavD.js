import React, { useState } from "react";
import {
  Container,
  Button,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from "../Assets/images/bannerLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import linkedinIcon from "../Assets/images/Linkdin.svg";
import youtubeIcon from "../Assets/images/Youtube.svg";
import emailIcon from "../Assets/images/email.svg";

export default function Navb() {
  const [expand, setExpand] = useState("");

  document.addEventListener("scroll", () => {
    if (window.pageYOffset >= 10) {
      setExpand("");
    } else {
      setExpand("lg");
    }
  });

  return (
    <>
      <Navbar expand="" style={{ backgroundColor: "red" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="abc" />
          </Navbar.Brand>
          {expand && (
            <>
              <div className="d-flex me-auto">
                <Nav.Link href="#pricing">
                  <Button style={{ fontSize: "1vw" }}>
                    Discover Our Technology
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button style={{ fontSize: "1vw" }}>Talk With Us</Button>
                </Nav.Link>
              </div>
              <div>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </div>
            </>
          )}
          {/* <Navbar.Toggle style={{}} />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ backgroundColor: "blue" }}
          >
            <Nav className="me-auto"> */}
          {/* <Nav.Link href="#pricing">
                <Button>Discover Our Technology</Button>
              </Nav.Link>
              <Nav.Link>
                <Button>Talk With Us</Button>
              </Nav.Link> */}
          {/* </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
              <h1>test</h1>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}
