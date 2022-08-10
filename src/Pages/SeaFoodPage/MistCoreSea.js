import React, { useState, useEffect } from "react";
import Navb from "../../Components/Navb";
import Mistnavb from "../../Components/Mistnavb";
import NavbarLine from "../../Components/NavbarLine";
import Banner from "../../Components/Banner";
import IndustryComp from "../../Components/IndustryComp";
import Protection from "../../Components/Protection";
import Payment from "../../Components/Payment";
import TailerMade from "../../Components/TailerMade";
import Core4Comp from "../../Components/Core4Comp";
import MistCoreSlider from "../../Components/MistCoreSlider";
import MistCoreSlider2 from "../../Components/MistCoreSlider2";
import bannerseaFood2 from "../../Assets/SeaFood/n__1.png";
import c30 from "../../Assets/SeaFood/c-30.png";
import c40 from "../../Assets/SeaFood/c-40.png";
import Mistfooter from "../../Components/Mistfooter";
import AboutPanels from "../../Components/AboutPanels";
import MistCoreCards from "../../Components/MistCoreCards";
import EmailForm from "../../Components/EmailForm";
import Email2 from "../../Components/Email2";
import { useParams } from "react-router-dom";
import axios from "axios";
import data from "../../Data/mistcoredata";
import Bargraph from "../../Components/Bargraph";
import Linegraph from "../../Components/Linegraph";

const MistCoreSea = () => {
  const [backcolor, setbackcolor] = useState("");
  const [showbargraph, setShowbargraph] = useState(false);
  const [showlinegraph, setShowlinegraph] = useState(false);

  const [imges, setimg] = useState({});

  const [name, setName] = useState("");

  const [color, setColor] = useState("");

  const params = useParams();
  const category = params.category;

  console.log(category);
  console.log({ category });

  useEffect(() => {
    if (category === "sea-food") {
      setbackcolor("#0098DA");
      setShowbargraph(false);
      setShowlinegraph(false);
      setimg(mistcore.Tailermade_seafood);
      setName("Seafood");
      setColor("rgba(0, 152, 218, 0.45)");
    } else if (category === "meat") {
      setbackcolor("#952B36");
      setShowbargraph(true);
      setShowlinegraph(false);
      setimg(mistcore.Tailermade_meat);
      setName("MEAT");
      setColor("rgba(149,43,54,0.45)");
    } else if (category === "poultry") {
      setbackcolor("#ECB533");
      setShowbargraph(false);
      setShowlinegraph(true);
      setimg(mistcore.Tailermade_poultary);
      setName("POULTRY");
      setColor("rgba(236,181,51,0.45)");
    } else if (category === "salmon") {
      setbackcolor("#EE6E54");
      setShowbargraph(false);
      setShowlinegraph(false);
      setimg(mistcore.Tailermade_selmon);
      setName("SALMON");
      setColor("rgba(238,110,84,0.45)");
    }
  }, []);

  

  // ==========================APi URLS========================

  const baseurl = "http://137.184.186.254:1337/api/homes";
  const baseurl2 = "http://137.184.186.254:1337/api/second-comps";
  const Banner_1 = "http://137.184.186.254:1337/api/banner-1s";

  const images1 = [{ img12: c30 }, { img12: c30 }, { img12: c30 }];
  const images2 = [{ img12: c40 }, { img12: c40 }, { img12: c40 }];

  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [banner_1, setBanner_1] = useState("");
  const [mistcore, setMistcore] = useState(data);

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
  }, []);

  useEffect(() => {
    document.title = "MIST-CORE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Mistnavb
        bgColor={color}
        comment0={"Mist Core"}
        comment1={"Mist Focus"}
        comment2={"Mist Canal"}
        comment3={"Mist Direct"}
        comment4={""}
        link1={`/mist-core/${category}`}
        link2={`/mist-focus/${category}`}
        link3={`/mist-canal/${category}`}
        link4={`/mist-direct/${category}`}
        envlink={`/environmental-impact/${category}`}
        faqlink={`/faqs/${category}`}
        clientlink={`/clients/${category}`}
      />
      <NavbarLine lineColor={backcolor} display={"block"} />
      {/* <Banner
        Src={bannerseaFood2}
        comment1={"ALVAR"}
        comment2={"  "}
        comment3={"MIST CORE"}
      /> */}
      <Banner
        Src={bannerseaFood2}
        data1={mistcore.banner}
        // videoSrc={mistcore.videoSrc}
      />
      <IndustryComp IndName={name} CoreName={"INDUSTRY"} color={backcolor} />
      <Protection
        data2={mistcore.protection}
        // comment1={"What is Mist Core"}
        // comment2={
        //   'A central solution taht protects the whole productions line, the "Core" of your business.'
        // }
        // comment3={"ALVAR MIST CORE"}
        // comment4={
        //   "Mist Core provides a big scale holistic solution for the whoel Fish production chain. The system deploys a high density disinfectant mist in each of the rooms chosen within the factory, being adapted for its efficiency depwnding on the rooms size. The density of the mist gurantees an in-depth  disinfection, including small gaps between machinery."
        // }
      />
      <Payment />
      <Core4Comp
        comment1={
          "We have installed hundreds of systems around the world with a high return on the investment "
        }
        comment2={
          " The automation of the disinfection process off Fish factory allows bussiness to preserve resources and fight costs saving up to 90% water, 70 % of chemical usage and 100% of staff costs."
        }
      />
      <MistCoreSlider
        imagesprops={mistcore.mistcoreslider}
        comment0={
          <>ALVAR Mist Core is available in two {<br />} different models:</>
        }
        comment1={"Mist Core C-30"}
        comment2={
          "  C-30 is the 3rd Mist Core generation system developed by ALVAR and for many years the flagship of the company. With dozens of systems installed in Fish Factories around the world, its efficiency combating bacteria and strenght protecting business has been thoroughly proven."
        }
      />
      <MistCoreSlider2
        imagesprops={mistcore.mistcoreslider2}
        comment0={""}
        comment1={"Mist Core C-40"}
        comment2={
          "  C-40 is the 3rd Mist Core generation system developed by ALVAR and for many years the flagship of the company. With dozens of systems installed in Fish Factories around the world, its efficiency combating bacteria and strenght protecting business has been thoroughly proven."
        }
      />

      <TailerMade data={imges} />
      <AboutPanels />
      <MistCoreCards
        data={mistcore.mistcorecard}
        industry={category}
        link1={`/mist-focus/${category}`}
        link2={`/mist-canal/${category}`}
        link3={`/mist-direct/${category}`}
      />
      {showbargraph && <Bargraph />}
      {showlinegraph && <Linegraph />}
      <EmailForm category={"mistpage"} />
      {/* <Email2 /> */}
      <Mistfooter
        comment0={"Mist Core"}
        comment1={"Mist Focus"}
        comment2={"Mist Canal"}
        comment3={"Mist Direct"}
        comment4={""}
        link1={`/mist-core/${category}`}
        link2={`/mist-focus/${category}`}
        link3={`/mist-canal/${category}`}
        link4={`/mist-direct/${category}`}
        envlink={`/environmental-impact/${category}`}
        faqlink={`/faqs/${category}`}
        clientlink={`/clients/${category}`}
        backcolor={backcolor}
        textcolor={"white"}
      />
    </>
  );
};

export default MistCoreSea;
