import React from "react";
import bannerHome1 from "../Assets/images/HomePage.png";
import "./Stylesheet/style.css";
import { Col, Container, Image, Row } from "react-bootstrap";
const Banner2 = ({ data, pageName }) => {
  return (
    <div className="banner-2">
      <img
        className="img-fluid banner2-img"
        src={data.img_src}
        alt="First slide"
        style={{ opacity: "1", filter: "brightness(30%)" }}
      />

      {/* <div className="banner2-text">
        <h1 className="">Protect</h1>
        <h1 style={{ fontWeight: "600" }}>Product</h1>
        <h1>& People</h1>
        <h3 className="carouselh3">{pageName || data.pageName}</h3>
      </div> */}

      <div className="main_banner">
        <div className="banner2-text_2">
          <h1 style={{ fontWeight: "400" }} className="">
            PROTECT
          </h1>
          <h1 style={{ fontWeight: "bold" }}>PRODUCT</h1>
          <h1 style={{ fontWeight: "400" }}>&PEOPLE</h1>
          <h4 className="text-end my-auto" style={{marginRight:"5px"}}>{pageName || data.pageName}</h4>
        </div>
        <div>
          {data.pagedescription ? (
            <div className="banner2-descriptions">
              <span>
                Tailor-made mist systems that combat bacteria and fight cost
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
