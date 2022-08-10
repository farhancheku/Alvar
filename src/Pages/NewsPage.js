import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Card, Col, Container, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../Data/News.js";
import Dataa from "../Data/Homedata";
import Navb from "../Components/Navb";
import Banner2 from "../Components/Banner2";
import CardsComp from "../Components/CardsComp";
import New_tech from "../Components/New_tech";
import Oursolutions from "../Components/Oursolutions";
import NewsLetter from "../Components/NewsLetter";
import Data from "../Data/Homedata";
import Footer2 from "../Components/Footer2";
import footer from "../Data/enquirydata";

const laravel = "http://127.0.0.1:8000/api/get-all-news";

const NewsPage = ({ propsdata }) => {
  const news_story = "http://137.184.186.254:1337/api/news-story-homes";

  const [expodata, setExpodata] = useState(data);
  const [news, setNews] = useState("");
  const [homedata, setHomedata] = useState(Data);

  const [lara, setlara] = useState("");
  console.log(news, "news");

  useEffect(() => {
    axios.get(laravel).then((response) => {
      setlara(response.data);
    });

    axios.get(news_story).then((response) => {
      setNews(response.data.data?.reverse());
    });
    document.title = "NEWS-PAGE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navb bgColor={"#6F8197"} />
      <Banner2 data={expodata.banner} />
      <New_tech data={expodata.tech} pageName={""} />
      <Oursolutions data={expodata.Dtech} />
      <NewsLetter data={homedata.newsletter} />
      <Oursolutions data={expodata.Rannis} />
      <Container fluid className="cardbackground">
        {/* {news && <CardsComp data={news} />} */}
        {/* <CardsComp data={expodata.news} /> */}
        <div className="mt-5" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
          {lara && <CardsComp data={lara} />}
        </div>

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
          link5={"/newspage"}
          backcolor={"#D3D3D3"}
          textcolor={"#0c2c5b"}
        />
      </Container>
    </>
  );
};

export default NewsPage;
