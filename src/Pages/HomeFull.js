import React, { useEffect, useState } from "react";
import axios from "axios";
import Navb from "../Components/Navb";
import NavbarLine from "../Components/NavbarLine";
import BannerFull from "../Components/Banner-full-width";
import bannerHome1 from "../Assets/images/HomePage.png";
import IndustryButtons from "../Components/IndustryButtons";
import Protection from "../Components/Protection";
import Payment from "../Components/Payment";
import TailerMade from "../Components/TailerMade";
import BusinessProt from "../Components/BusinessProt";
import ResourcePreserve from "../Components/ResourcePreserve";
import SimpleSwiper from "../Components/SimpleSwiper";
import AlvarCombat from "../Components/AlvarCombats";
import SysComp from "../Components/SysComp";
import CardsComp from "../Components/CardsComp";
import NewsLetter from "../Components/NewsLetter";
import HowMist from "../Components/HowMistSec";
import OurStory from "../Components/OurStory";
//import Footer from "../Components/Footer";
import img123 from "../Assets/images/58.png";
import Footer2 from "../Components/Footer2";
import Data from "../Data/Homedata";
const Home = () => {
  // ==========================APi URLS========================

  const baseurl = "http://137.184.186.254:1337/api/homes";
  const baseurl2 = "http://137.184.186.254:1337/api/second-comps";
  const Banner_1 = "http://137.184.186.254:1337/api/banner-1s";
  const business_port = "http://137.184.186.254:1337/api/Business-ports";
  const card = "http://137.184.186.254:1337/api/preserve-resource-cards";
  const card_description = "http://137.184.186.254:1337/api/preserve-resources";
  const customer_story = "http://137.184.186.254:1337/api/customer-stories";
  const industry_cards = "http://137.184.186.254:1337/api/card-2s";
  const Banner_2 = "http://137.184.186.254:1337/api/banner-2s";
  const news_story = "http://137.184.186.254:1337/api/news-story-homes";
  const Banner_3 = "http://137.184.186.254:1337/api/banner-3s";
  const pages = "http://137.184.186.254:1337/api/pages";
  // ========================States=============================

  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [banner_1, setBanner_1] = useState("");
  const [business, setBusiness_port] = useState("");
  const [card_1, setCard_1] = useState("");
  const [card_des, setCard_des] = useState("");
  const [story, setStory] = useState("");
  const [card_2, setCard_2] = useState("");
  const [banner_2, setBanner_2] = useState("");
  const [news, setNews] = useState("");
  const [banner_3, setBanner_3] = useState("");

  const [homedata, setHomedata] = useState(Data);
  // ========================USE-EFFECT=============================

  useEffect(() => {
    axios.get(baseurl).then((response) => {
      setData1(response.data.data[0].attributes);
    });
    axios.get(baseurl2).then((response) => {
      setData2(response.data.data[1].attributes);
    });
    axios.get(Banner_1).then((response) => {
      setBanner_1(response.data.data[0].attributes);
    });
    axios.get(business_port).then((response) => {
      setBusiness_port(response.data.data[0].attributes);
    });

    axios.get(card).then((response) => {
      setCard_1(response.data.data);
    });
    axios.get(card_description).then((response) => {
      setCard_des(response.data.data[0].attributes);
    });
    axios.get(customer_story).then((response) => {
      setStory(response.data.data[0].attributes);
    });
    axios.get(industry_cards).then((response) => {
      setCard_2(response.data.data);
    });
    axios.get(Banner_2).then((response) => {
      setBanner_2(response.data.data[0].attributes);
    });
    axios.get(news_story).then((response) => {
      setNews(response.data.data?.reverse());
    });
    axios.get(Banner_3).then((response) => {
      setBanner_3(response.data.data[0].attributes);
    });
  }, []);

  useEffect(() => {
    document.title = "ALVAR-HOME";
    window.scrollTo(0, 0);
  }, []);

  // ================================Component Return=======================
  return (
    <>
      <Navb bgColor={"#6F8197"} />
      <NavbarLine lineColor={"none"} display={"none"} />
      <BannerFull
        Src={bannerHome1}
        data1={homedata.banner}
        videoSrc={homedata.videoSrc}
      />
      <IndustryButtons />
      <Protection data2={homedata.protection} />
      <Payment />
      <TailerMade data={homedata.Tailermade} />
      {business && <BusinessProt data={business} />}
      {card_1 && <ResourcePreserve data={card_1} data_para={card_des} />}
      <SimpleSwiper data={homedata.Simpleswiper} />
      {homedata.Alvarcombat && <AlvarCombat data={homedata.Alvarcombat} />}
      <SysComp data={homedata.syscomp} />
      {news && <CardsComp data={news} />}
      <NewsLetter data={homedata.newsletter} />
      <HowMist data={homedata.howmist} />
      <OurStory bgImg={img123} />
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

export default Home;
