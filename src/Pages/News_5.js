import React, { useEffect, useState } from "react";
import Footer2 from "../Components/Footer2";
import Data from "../Data/Homedata";
import NewsLetter from "../Components/NewsLetter";
import Navb from "../Components/Navb";
import CardsComp from "../Components/CardsComp";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Col, Row, Card } from "react-bootstrap";
import axios from "axios";

const News_5 = () => {
  const laravel = "https://api.alvar.is/api/get-all-news";
  const [homedata, setHomedata] = useState(Data);
  const [lara, setlara] = useState("");
  useEffect(() => {
    axios.get(laravel).then((response) => {
      setlara(response.data);
    });
  });

  return (
    <>
      <Navb bgColor={"#6F8197"} />

      <div className="banner-2">
        <img
          className="img-fluid banner2-img"
          // src={homedata.imgbanner4.img_src_banner}
          alt="First slide"
          style={{ opacity: "", filter: "" }}
        />
      </div>
      <Container className="mt-5">
        <div>
          <p className="new_text_heading"> 2 march 2022</p>
          <h3 className="new_text_headings">
            Elvar parntership with pacnaf for the US and pasific
          </h3>
          <p className="news_paras mt-5">
            Writing Essays help in developing the mental ability of a kid and
            contributes to his overall development. Encourage young minds to
            write short and simple 10 Lines Essays from an early age. As kids
            engage themselves in writing 10 Lines Essay, they indulge themselves
            .
          </p>

          <p className="news_paras mt-5">
            Writing Essays help in developing the mental ability of a kid and
            contributes to his overall development. Encourage young minds to
            write short and simple 10
          </p>
          <p className="news_paras mt-5">
            Writing Essays help in developing the mental ability of a kid and
            contributes to his overall development. Encourage young minds to
            write short and simple 10
          </p>
          <p className="news_paras mt-5">
            Writing Essays help in developing the mental ability of a kid and
            contributes to his overall development. Encourage young minds to
            write short and simple 10
          </p>
          <p className="news_paras mt-5">
            Writing Essays help in developing the mental ability of a kid and
            contributes to his overall development. Encourage young minds to
            write short and simple 10
          </p>
          <Container>
            <Row className="justify-content-center">
              <Col lg={6} md={6} className="mt-5"></Col>

              <Col lg={6} md={6} className="mt-5">
                <hr
                  style={{
                    width: "100%",
                    border: "0px  solid ",
                    opacity: "1",
                  }}
                  className=""
                ></hr>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      {/* <Container fluid>
        <div className="newsdata-container">
          <p className="new_text_heading"> 2 march 2022</p>
          <h3 className="new_text_heading">
            Imported JSX component News_1 must be in PascalCase or SCREAMING
            SNAKE_CASE
          </h3>
          <p>
            Writing Essays help in developing the mental ability of a kid and
            contributes to his overall development. Encourage young minds to
            write short and simple 10 Lines Essays from an early age. As kids
            engage themselves in writing 10 Lines Essay, they indulge themselves
            in a diverse chain of thoughts. Thus, use their imagination and
            weave their thoughts into words.
          </p>
        </div>
      </Container> */}
      <div className="mt-5" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
        {lara && <CardsComp data={lara} />}

        <NewsLetter data={homedata.newsletter} />
        <Footer2
          comment0={"Sea Food"}
          comment1={"Meat"}
          comment2={"Poultry"}
          comment3={"Salmon"}
          comment4={"Others"}
          link1={"/sea-food"}
          link2={"/meat"}
          link3={"/poultry"}
          link4={"/salmon"}
          backcolor={"#E4E4E4"}
          textcolor={"#0c2c5b"}
        />
      </div>
    </>
  );
};

export default News_5;
