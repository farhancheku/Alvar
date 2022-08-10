import React, { useEffect, useState } from "react";
import axios from "axios";
import Mistnavb from "../Components/Mistnavb";
import NavbarLine from "../Components/NavbarLine";
import Banner from "../Components/Banner";
// import bannerseaFood1 from "../Assets/images/n-6.png";
import bannerseaFood2 from "../Assets/images/n_9.png";

import Protection from "../Components/Protection";
import Payment from "../Components/Payment";
import TailerMade from "../Components/TailerMade";
import BusinessProt from "../Components/BusinessProt";
import ResourcePreserve from "../Components/ResourcePreserve";
import SimpleSwiper from "../Components/SimpleSwiper";

import SysComp from "../Components/SysComp";
import CardsComp from "../Components/CardsComp";
import NewsLetter from "../Components/NewsLetter";
import HowMist from "../Components/HowMistSec";
import OurStory from "../Components/OurStory";
import Mistfooter from "../Components/Mistfooter";
import IndustryComp from "../Components/IndustryComp";
import OurStoryImage from "../Assets/SeaFood/n_8.png";
import Data from "../Data/salmondata";

const Salmon = () => {
  // ==========================APi URLS========================

  const baseurl = "http://137.184.186.254:1337/api/homes";
  const baseurl2 = "http://137.184.186.254:1337/api/second-comps";
  const Banner_1 = "http://137.184.186.254:1337/api/banner-1s";
  const business_port = "http://137.184.186.254:1337/api/Business-ports";
  const card = "http://137.184.186.254:1337/api/preserve-resource-cards";
  const card_description = "http://137.184.186.254:1337/api/preserve-resources";
  const customer_story = "http://137.184.186.254:1337/api/customer-stories";
  const Banner_2 = "http://137.184.186.254:1337/api/banner-2s";
  const news_story = "http://137.184.186.254:1337/api/news-story-homes";
  const Banner_3 = "http://137.184.186.254:1337/api/banner-3s";

  const laravel = "https://api.alvar.is/api/get-all-news";

  // ========================States=============================

  //Staticdata
  const [salmon, setSalmon] = useState(Data);

  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [banner_1, setBanner_1] = useState("");
  const [business, setBusiness_port] = useState("");
  const [card_1, setCard_1] = useState("");
  const [card_des, setCard_des] = useState("");
  const [story, setStory] = useState("");
  const [banner_2, setBanner_2] = useState("");
  const [news, setNews] = useState("");
  const [banner_3, setBanner_3] = useState("");

  const [lara, setlara] = useState("");
  // ========================USE-EFFECT=============================
  useEffect(() => {
    axios.get(laravel).then((response) => {
      setlara(response.data);
    });

    axios.get(baseurl).then((response) => {
      // console.log(response.data.data[0].attributes);
      setData1(response.data.data[2].attributes);
    });
    axios.get(baseurl2).then((response) => {
      // console.log(response.data.data[1].attributes, "sdfjslfj");
      setData2(response.data.data[1].attributes);
    });
    axios.get(Banner_1).then((response) => {
      // console.log(response.data.data[0].attributes);
      setBanner_1(response.data.data[0].attributes);
    });
    axios.get(business_port).then((response) => {
      // console.log(response.data.data[0].attributes);
      setBusiness_port(response.data.data[0].attributes);
    });
    axios.get(card).then((response) => {
      // console.log(response.data.data[0].attributes);
      // setCard_1(response.data.data[0].attributes);
      setCard_1(response.data.data);
    });
    axios.get(card_description).then((response) => {
      // console.log(response.data.data[0].attributes);
      setCard_des(response.data.data[0].attributes);
    });
    axios.get(customer_story).then((response) => {
      // console.log(response.data.data[0].attributes);
      setStory(response.data.data[0].attributes);
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
    document.title = "ALVAR-SALMON";
    window.scrollTo(0, 0);
  }, []);

  // ================================Component Return=======================
  return (
    <>
      <Mistnavb
        bgColor={"rgba(238,110,84,0.45)"}
        comment0={"Mist Core"}
        comment1={"Mist Focus"}
        comment2={"Mist Canal"}
        comment3={"Mist Direct"}
        comment4={""}
        link1={"/mist-core/salmon"}
        link2={"/mist-focus/salmon"}
        link3={"/mist-canal/salmon"}
        link4={"/mist-direct/salmon"}
        envlink={"/environmental-impact/salmon"}
        faqlink={"/faqs/salmon"}
        clientlink={"/clients/salmon"}
      />
      <NavbarLine lineColor={"#EE6E54"} display={"block"} />
      <Banner
        Src={bannerseaFood2}
        data1={salmon.banner}
        videoSrc={salmon.videoSrc}
      />

      <IndustryComp
        IndName={"SALMON"}
        CoreName={"INDUSTRY"}
        color={"#EE6E54"}
      />
      <Protection data2={salmon.protection} />
      <Payment />

      <SysComp data={salmon.syscomps} />
      <BusinessProt data={salmon.Bussinesprot} />

      <ResourcePreserve
        data={salmon.Resourcepreservecard}
        data_para={salmon.Resourcepreserve}
      />
      <SimpleSwiper data={salmon.Simpleswiper} />
      <TailerMade data={salmon.Tailermade} />

      <div className="mt-5" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
        {lara && <CardsComp data={lara} />}
      </div>

      {/* <NewsLetter data={salmon.newsletter} /> */}
      <HowMist data={salmon.howmist} />
      <OurStory bgImg={OurStoryImage} />
      <Mistfooter
        comment0={"Mist Core"}
        comment1={"Mist Focus"}
        comment2={"Mist Canal"}
        comment3={"Mist Direct"}
        comment4={""}
        link1={"/mist-core/salmon"}
        link2={"/mist-focus/salmon"}
        link3={"/mist-canal/salmon"}
        link4={"/mist-direct/salmon"}
        envlink={"/environmental-impact/salmon"}
        faqlink={"/faqs/salmon"}
        clientlink={"/clients/salmon"}
        backcolor={"#EE6E54"}
        textcolor={"white"}
      />
    </>
  );
};

export default Salmon;
