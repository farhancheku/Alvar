import React, { useEffect, useState } from "react";
import Footer2 from "../Components/Footer2";
import Data from "../Data/Homedata";
import NewsLetter from "../Components/NewsLetter";
import Navb from "../Components/Navb";
import CardsComp from "../Components/CardsComp";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const News_1 = () => {
  const laravel = "https://api.alvar.is/api/get-all-news";
  const [newsData, setNewsData] = useState({});
  const [homedata, setHomedata] = useState(Data);
  const [lara, setlara] = useState({ data: [] });
  const [state, setstate] = useState(true);
  console.log(lara, "laravell");
  const params = useParams();
  const slug = params.slug;
  console.log("data test ", params);
  console.log(slug, "asdasdasdd");
  useEffect(() => {
    axios.get(laravel).then((response) => {
      setlara(response.data);
      setstate(false);
    });
  }, []);
  useEffect(() => {
    document.title = "ALVAR-NEWS";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filteredData = lara.data.filter((obj) => slug === obj.slug);

    console.log(filteredData, "filterdataaa");
    setNewsData(filteredData);
    // if (id) {
    //   //   let tempData = cards.filter((item) => item.id === parseInt(id));
    //   //   setNewsData(tempData);
    //   axios.get(`${news_story}/${id}`).then((response) => {
    //     setNewsData(response.data.data);
    //   });
    // }
  }, [slug, lara]);
  if (newsData) {
    console.log(newsData[0], "singledata");
  } else {
    console.log("not coming data");
  }

  return state ? (
    <h1></h1>
  ) : (
    <>
      <Navb bgColor={"#6F8197"} />

      <div className="banner-2">
        <img
          className="img-fluid banner2-img"
          // src={homedata.imgbanner.img_src_banner}
          src={newsData[0]?.banner_img}
          alt="First slide"
          style={{ opacity: "", filter: "" }}
        />
      </div>
      <Container className="mt-5">
        <div>
          <p className="new_text_heading">{newsData[0].publishedAt}</p>
          <h3 className="new_text_headings">
            {/* Elvar parntership with pacnaf for the US and pasific */}
            {newsData[0]?.title_news}
          </h3>

          <div
            dangerouslySetInnerHTML={{
              __html: newsData[0]?.brief_description,
            }}
          ></div>
          {/* <p className="news_paras mt-5">
            Writing Essays help in developing the mental ability of a kid and
            contributes to his overall development. Encourage young minds to
            write short and simple 10 Lines Essays from an early age. As kids
            engage themselves in writing 10 Lines Essay, they indulge themselves
            in a diverse chain of thoughts. Thus, use their imagination and
            weave their thoughts into words. they indulge themselves in a
            diverse chain of thoughts. Thus, use their imagination and weave
            their thoughts into words.
          </p>
          <p className="news_paras mt-5">
            Writing Essays help in developing the mental ability of a kid and
            contributes to his overall development. Encourage young minds to
            write short and simple 10 Lines Essays from an early age. As kids
            engage themselves in writing 10 Lines Essay, they indulge themselves
            in a diverse chain of thoughts. Thus, use their imagination and
            weave their thoughts into words.
          </p>
          <div className="d-flex justify-content-center">
            <Image
              className=""
              src={homedata.imgbanner.img_src_card1}
              style={{ width: "50%" }}
              alt="haris munir"
            ></Image>
          </div>

          <p className="news_paras mt-5">
            Writing Essays help in developing the mental ability of a kid and
            contributes to his overall development. Encourage young minds to
            write short and simple 10 Lines Essays from an early age. As kids
            engage themselves in writing 10 Lines Essay, they indulge themselves
            in a diverse chain of thoughts. Thus, use their imagination and
            weave their thoughts into words.
          </p> */}
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

export default News_1;
