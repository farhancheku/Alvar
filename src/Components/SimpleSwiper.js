import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import poultryImage from "../Assets/images/37.png";
import sponsorImage from "../Assets/images/35.png";
import ladyImage from "../Assets/images/36.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function SimpleSwiper({ data }) {
  // console.log(data, "simple data")
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    variableWidth : false,
    responsive : [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 0.25,
          slidesToScroll: 0.25,
          
        },
      },
      
    ],
  }
  

  return (
    <>
      <div className="mt-5" style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
      <Container className="">
      <h5 className="fw-bold pt-3">Customer Stories</h5>

        <Slider {...sliderSettings}  style={{paddingTop:"10px"}}>
       
        <div className="pt-1">
            <Card >
            <Link to="/clients"  style={{                     
                       color: " #07f5df",
                       
                     }} ><Card.Img src={data.img_src_g1} /></Link>
              
            </Card>
          </div>
          <div  className="pt-2">
            <Card.Img src={data.img_src_3}  className="img-fluid " />
          </div>
        {data.img_src_g2 && <div className="pt-2">
            <Card >
              <Card.Img src={data.img_src_g2} />
            </Card>
          </div>}
          {data.img_src_6 && <div  className="pt-2">
            <Card.Img src={data.img_src_6} className="img-fluid"/>
          </div>}
        {data.img_src_g3 && <div className="pt-2">
            <Card >
              <Card.Img src={data.img_src_g3} />
            </Card>
          </div>}
          {data.img_src_9 && <div  className="pt-2">
            <Card.Img src={data.img_src_9} className="img-fluid " />
          </div>}


          {/* <div style={{ width: "12%" }} className="pt-2 poltryDiv simpleswiper1">
            <Card >
              <Card.Img src={data.img_src_1} />
            </Card>
          </div>

          <div style={{ width: "8%" }} className=" pt-2 textDiv ">
            <Card className="p-3" style={{ border: "none" }}>
              <Card.Title className="fw-bold" style={{ fontSize: "1.2vw" }}>
                {data.text_title_1}
              </Card.Title>
              <Card.Text
                className=""
                style={{ fontSize: "1vw", borderBottom: "solid  grey 1px" }}
              >
                {data.text_1}
              </Card.Text>
            </Card>
          </div>
          <div className="simpleswiper2 pt-2" style={{ width: "5%" }}>
            <Card.Img src={data.img_src_2} className="ladyImage" />
          </div>
          <div className="simpleswiper3 pt-2" style={{ width: "14%" }}>
            <Card.Img src={data.img_src_3} className="img-fluid " />
          </div> */}
              
        </Slider>
        </Container>
      </div>
    </>
  );
}
