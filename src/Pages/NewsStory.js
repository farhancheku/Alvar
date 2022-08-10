import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navb from "../Components/Navb";
import Footer2 from "../Components/Footer2";
import NavbarLine from "../Components/NavbarLine";
import CardsComp from "../Components/CardsComp";
import { Container, Image } from "react-bootstrap";
import data from "../Data/Homedata";
const NewsStory = () => {
  // const { menu_ind_name_1, menu_ind_name_2, menu_ind_name_3, menu_ind_name_4 } =
  //   propsdata.attributes;
  // const { menu_ind_link_1, menu_ind_link_2, menu_ind_link_3, menu_ind_link_4 } =
  //   propsdata.attributes;
  const news_story = "http://137.184.186.254:1337/api/news-story-homes";

  const [newsData, setNewsData] = useState({});
  const [news, setNews] = useState([]);
  const [homedata, setHomedata] = useState(data);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    axios.get(news_story).then((response) => {
      setNews(response.data.data);
    });
  }, []);

  useEffect(() => {
    document.title = "ALVAR-NEWS";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filteredData = news.filter((obj) => parseInt(id) === obj.id);
    console.log(filteredData, "hgfhg");
    setNewsData(filteredData);
    // if (id) {
    //   //   let tempData = cards.filter((item) => item.id === parseInt(id));
    //   //   setNewsData(tempData);
    //   axios.get(`${news_story}/${id}`).then((response) => {
    //     setNewsData(response.data.data);
    //   });
    // }
  }, [id, news]);
  console.log(news, "news");
  console.log(newsData, "news");
  console.log(params, "params");

  return (
    <>
      <Navb bgColor={"#6F8197"} />
      <NavbarLine lineColor={"none"} display={"none"} />
      <Container fluid>
        <div className="newsdata-container">
          <Image
            className=""
            src={newsData[0]?.attributes?.img_src}
            style={{ width: "100%" }}
          ></Image>

          <h3 className="my-2 px-3">{newsData[0]?.attributes?.text_1}</h3>
          <hr
            style={{
              opacity: "1",
              width: "40%",
              marginLeft: "1.5rem",
              height: "2px",
            }}
          />

          <div className="my-3 px-3">{newsData[0]?.attributes?.text_2}</div>
        </div>
      </Container>
      {news && <CardsComp data={news} />}
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
    </>
  );
};

export default NewsStory;
