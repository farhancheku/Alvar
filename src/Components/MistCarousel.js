import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

const MistCarousel = ({ imagesprops }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  //   const [imgdata, setImgData] = useState([
  //     { img: img1 },
  //     { img: img1 },
  //     { img: img1 },
  //   ]);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,

    // responsive: [
    //   {
    //     breakpoint: 750,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       // initialSlide: 2,
    //     },
    //   },

    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <>
      {/* <Col
        xs={12}
        md={12}
        lg={12}
        xl={12}
        className="d-flex justify-content-center"
      >
        <Slider
          {...sliderSettings}
          className="width-carousel-mist"
          style={{ width: "600px" }}
        >
          {imagesprops.map((card) => (
            <div>
              <img
                src={card.img_src}
                className="img-fluid img-fluid11 "
                alt=""
              />
            </div>
          ))}
        </Slider>
      </Col> */}
      <Carousel activeIndex={index} onSelect={handleSelect} className="navb">
        {
          // carousel &&
          imagesprops.map((e, i) => (
            <Carousel.Item>
              <img
                className="carouselImage img-fluid"
                src={e.img_src}
                alt="First slide"
                // style={{ opacity: "1", filter: "brightness(30%)" }}
              />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </>
  );
};
export default MistCarousel;
