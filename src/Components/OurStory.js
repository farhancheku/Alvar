import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import OurStoryImage from "../Assets/images/58.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function OurStory({ bgImg }) {
  return (
    <>
      <div className="container mb-3" style={{ height: "43rem",padding:"0px", marginTop:"30px" }}>
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "95%",
            objectFit: "contain"
          }}
        >
          <div
            className="row w-123"
            style={{ 
              
              // backgroundImage: `url(${OurStoryImage})`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
              // height: "105%",
            }}
          >
            {" "}
            <h3 className="text-center pt-5 " style={{ color: "white" }}>
              Our Story
            </h3>{" "}
            <Col lg={4} sm={12} md={6}></Col>
            <Col lg={4} sm={12} md={6}></Col>
            <Col lg={3} sm={12} md={6}>
              <p
                style={{
                  fontSize: ".9rem",
                  // paddingLeft:"8px",
                  color: "white",
                  borderBottom: "3px solid white",  
                  textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
                  
                }}
                className=" pt-1 text-justify ourstory-parag"
              >
                Developed and designed in Iceland. Home to clean resources,
                clean nature, clean air, and the cleanest water anywhere.
              </p>
              <p
                className="ourstory-readmore"
                style={{
                  textAlign: "left",
                  // paddingLeft:"8px",
                  color: " #07f5df",
                  textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
                }}
              >
                <Link
                  to="/our-story"
                  style={{
                    color: " #07f5df",
                  }}
                >
                  Read more {`>`}{" "}
                </Link>
              </p>
            </Col>{" "}
           
          </div>
        </div>
      </div>
    </>
  );
}
