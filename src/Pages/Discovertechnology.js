import React, { useState, useEffect } from "react";
import Navb from "../Components/Navb";
import NavbarLine from "../Components/NavbarLine";
import Banner from "../Components/Banner";
import Protection from "../Components/Protection";
import techbanner from "../Assets/images/techbanner.png";
import ResourcePreserve from "../Components/ResourcePreserve";
import SysComp from "../Components/SysComp";
import Footer2 from "../Components/Footer2";
import TailerMade from "../Components/TailerMade";
import Graphs from "../Components/Graphs";
import axios from "axios";
import Savingscomp from "../Components/Savingscomp";
import Data from "../Data/techData";
import Clientssendenquiry from "../Components/Clientssendenquiry";
import SysComp_1 from "../Components/sysComp_1";
import Core_cards from "../Components/Core_cards";
import Banner2 from "../Components/Banner2";

const Discovertechnology = () => {
  const baseurl = "http://137.184.186.254:1337/api/homes";
  const baseurl2 = "http://137.184.186.254:1337/api/second-comps";
  const Banner_2 = "http://137.184.186.254:1337/api/banner-2s";
  const card = "http://137.184.186.254:1337/api/preserve-resource-cards";
  const card_description = "http://137.184.186.254:1337/api/preserve-resources";
  const Banner_1 = "http://137.184.186.254:1337/api/banner-1s";

  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [banner_2, setBanner_2] = useState("");
  const [card_des, setCard_des] = useState("");
  const [card_1, setCard_1] = useState("");
  const [banner_1, setBanner_1] = useState("");

  const [technology, setTechnology] = useState(Data);

  useEffect(() => {
    axios.get(baseurl).then((response) => {
      setData1(response.data.data[0].attributes);
    });
    axios.get(baseurl2).then((response) => {
      setData2(response.data.data[0].attributes);
    });
    axios.get(Banner_2).then((response) => {
      setBanner_2(response.data.data[0].attributes);
    });
    axios.get(card).then((response) => {
      setCard_1(response.data.data);
    });
    axios.get(card_description).then((response) => {
      setCard_des(response.data.data[0].attributes);
    });
    axios.get(Banner_1).then((response) => {
      setBanner_1(response.data.data[0].attributes);
    });
  }, []);
  useEffect(() => {
    document.title = "Discover our Tecnology";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navb bgColor={"rgba(111, 129, 151, 0.4)"} home_link={"test"} />
      <NavbarLine lineColor={"none"} display={"none"} />
      <Banner Src={techbanner} data1={technology.banner} />
      <Protection data2={technology.protection} content1={"name"} />
      <SysComp_1 data={technology.syscomp} />
      <Savingscomp data={technology.video} />
      <Protection data2={technology.protection1} reverse={"row reverse"} />
      <Core_cards
        data={technology.mistcorecard}
        link1={`/mist-core/sea-food`}
        link2={`/mist-focus/meat`}
        link3={`/mist-canal/poultry`}
        link4={`/mist-direct/salmon`}
      />
      {/* {technology.Resourcepreservecard && <ResourcePreserve data={technology.Resourcepreservecard} data_para={technology.Resourcepreserve} />} */}
      {/* <TailerMade data={technology.Tailermade} /> */}
      <Clientssendenquiry data={technology.sendenquiry} />
      <Graphs data={technology.graphs} />
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

export default Discovertechnology;
