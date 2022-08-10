/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Row, Card, Col, Container, CardGroup } from "react-bootstrap";
import img1 from "../Assets/images/73.png";
import img2 from "../Assets/images/74.png";
import img3 from "../Assets/images/75.png";
import img4 from "../Assets/images/77.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CardsComp({ data, propsdata, name }) {
  const [newsdata, setNewsData] = useState("");
  const [loading, setloading] = useState(true);
  const baseUrl_1 = "http://137.184.186.254:1337/api/news-story-homes";
  console.log(data, "cardss");

  // useEffect(() => {
  //   axios.get(baseUrl_1).then((resp) => {
  //     setNewsData(resp.data.data);
  //     setloading(false);

  //   });
  // }, []);

  // const [cardInfo1, setInfo] = useState("");

  // console.log(data, "Coming");
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  let cardInfo = [
    // {
    //   imgUrl: img1,
    //   title: "Protect your business while protecting the planet",
    //   text: "ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water and chemicals.   ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water",
    // },
    // {
    //   imgUrl: img2,
    //   title: "Protect your business while protecting the planet",
    //   text: "ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water and chemicals. ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water",
    // },
    // {
    //   imgUrl: img3,
    //   title: "Protect your business while protecting the plane",
    //   text: "ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water and chemicals. ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water",
    // },
    // {
    //   imgUrl: img4,
    //   title: "Protect your business while protecting the plane",
    //   text: "ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water and chemicals. ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water",
    // },
    // {
    //   imgUrl: img3,
    //   title: "Protect your business while protecting the plane",
    //   text: "ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water and chemicals. ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water",
    // },
    // {
    //   imgUrl: img3,
    //   title: "Protect your business while protecting the plane",
    //   text: "ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water and chemicals. ALVAR reduces production and reputational risks, increases food safety tremendously and reduces waste of water",
    // },
  ];

  return (
    <Container>
      <Row className="pt-lg-3">
        <h1 className="pt-0 new_cardd">News</h1>

        <Slider {...sliderSettings} className="">
          {data.data.map((cards, i) => {
            {
              /* let arrayLength = data.length - 1;
            if (cards.id > arrayLength) { */
            }
            return (
              <Col lg={3} xs={12} md={6} className="pt-lg-5 pb-lg-5  ">
                <Link to={`/news_story/${cards.slug}`} target="_blank">
                  <CardGroup
                    cards={cards}
                    propsdata={propsdata}
                    // style={{ maxHeight: "540px" }}
                    // className="bg-dark"
                  >
                    <Card
                      className="p-2 mx-1 "
                      style={{
                        boxShadow: "0px 0px 10px 0.3px #9E9E9E",
                        // maxHeight: "840px",
                        overflow: "hidden",
                        height: "410px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={cards.thumbnail}
                        alt="abc"
                        style={{ height: "170px", objectFit: "cover" }}
                      />
                      <Card.Body className="card-body-news">
                        <Card.Title className="fs-6 ">
                          {/* {cards.text_1.slice(0, 35)}... */}
                          <div
                          // dangerouslySetInnerHTML={{
                          //   __html: cards.title_news,
                          // }}
                          >
                            {cards.title_news.slice(0, 42)}...
                          </div>
                        </Card.Title>
                        <Card.Text
                          style={{
                            // borderBottom: "1px solid black",
                            fontSize: "0.7rem",
                            marginBottom: "0",
                            // maxHeight: "200px",
                            // height: "100%",
                            overflow: "none",
                            borderBottom: "1px solid black",
                            fontSize: "10px",
                            overflow: "hidden",
                            maxHeight: "130px",
                            height: "100%",
                          }}
                          className="pb-2 "
                        >
                          {/* {cards.text_2.slice(0, 170)}... */}
                          <div
                          // dangerouslySetInnerHTML={{
                          //   __html: cards.Short_description,
                          // }}
                          >
                            {cards.short_description.slice(0, 120)}...
                          </div>
                        </Card.Text>
                        <Card.Footer className="card-footer-news">
                          <a
                            href="#"
                            style={{
                              textDecoration: "none",
                              fontSize: "0.8rem",
                              color: "#0098DA",
                            }}
                          >
                            Read More
                          </a>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                </Link>
                {/* <div>This is </div> */}
              </Col>
            );
            {
              /* } */
            }
          })}
          <Col lg={3} xs={12} md={6} className="pt-lg-5 pb-lg-5  ">
            <Link to="/newspage" target="_blank">
              <CardGroup>
                <Card
                  className="p-2 mx-1"
                  style={{ boxShadow: "0px 0px 10px 0.3px #9E9E9E" }}
                >
                  {/* <Card.Img
                          variant="top"
                          src={cards.attributes.img_src}
                          alt="abc"
                        /> */}
                  <Card.Body className="card-body-news">
                    <Card.Title className="fs-6">
                      {/* {cards.attributes.text_1} */}
                    </Card.Title>
                    <Card.Text
                      style={{
                        display: "grid",
                        placeItems: "center",
                        // borderBottom: "1px solid black",
                        fontSize: "0.7rem",
                        marginBottom: "0",
                        height: "350px",
                      }}
                      className="pb-2 fs-4 "
                    >
                      <u> See More News</u>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Link>
          </Col>
        </Slider>
      </Row>
    </Container>
  );
}
