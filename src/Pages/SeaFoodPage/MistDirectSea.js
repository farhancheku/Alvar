import React, { useState, useEffect } from "react";
import Mistnavb from "../../Components/Mistnavb";
import NavbarLine from "../../Components/NavbarLine";
import Banner from "../../Components/Banner";
import IndustryComp from "../../Components/IndustryComp";
import Protection from "../../Components/Protection";
import Protection2 from "../../Components/Protection2";
import Payment from "../../Components/Payment";
import TailerMade from "../../Components/TailerMade";
import Core4Comp from "../../Components/Core4Comp";
import MistCoreSlider from "../../Components/MistCoreSlider";
import bannerseaFood2 from "../../Assets/SeaFood/n_12.png";
// import H10 from "/images/H-10.png";
import c40 from "../../Assets/SeaFood/c-40.png";
import Mistfooter from "../../Components/Mistfooter";
import AboutPanels from "../../Components/AboutPanels";
import MistCoreCards from "../../Components/MistCoreCards";
import EmailForm from "../../Components/EmailForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import BannerES from "../../Components/BannerES";
import data from "../../Data/mistdirectdata";
const MistDirectSea = () => {
  const [backcolor, setbackcolor] = useState("");

  const [mistdirect, setMistdirect] = useState(data);

  const [color, setColor] = useState("");
  
  const [name, setName] = useState("");

  const params = useParams();
  const category = params.category;

  console.log(category);
  console.log({ category });

  useEffect(() => {
    if (category === "sea-food") {
      setbackcolor("#0098DA");
      setName("Seafood");
      setColor("rgba(0, 152, 218, 0.45)");
    } else if (category === "meat") {
      setbackcolor("#952B36");
      setName("MEAT");
      setColor("rgba(149,43,54,0.45)");
    } else if (category === "poultry") {
      setbackcolor("#ECB533");
      setName("POULTRY");
      setColor("rgba(236,181,51,0.45)");
    } else if (category === "salmon") {
      setbackcolor("#EE6E54");
      setName("SALMON");
      setColor("rgba(238,110,84,0.45)");
    }
  }, []);

  const baseurl = "http://137.184.186.254:1337/api/homes";
  const baseurl2 = "http://137.184.186.254:1337/api/second-comps";
  const Banner_1 = "http://137.184.186.254:1337/api/banner-1s";

  //  const images1 = [{ img12: H10 }, { img12: H10 }, { img12: H10 }];
  const images2 = [{ img12: c40 }, { img12: c40 }, { img12: c40 }];

  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [banner_1, setBanner_1] = useState("");

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
    document.title = "MIST-DIRECT";
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
        comment3={"MIST DIRECT"}
      /> */}

      <Banner Src={bannerseaFood2} data1={mistdirect.banner} />
      <IndustryComp IndName={name} CoreName={"INDUSTRY"} color={backcolor} />
      <Protection
        data2={mistdirect.protection}
        // comment1={"What is ALVAR Mist DIRECT"}
        // comment2={
        //   "An ALVAR solution to fight bacteria in pipes, thanks and pupms."
        // }
        // comment3={"ALVAR MIST DIRECT"}
        // comment4={
        //   "Bacteria can grow in reduced spaces and attack Fish and seafood factories by infecting pipes, tanks, or pupms. Mist canal creates a mic of water and disinfection chemical, which navigatws through machinery to strategically combat harmful microbes and reduce production and reputational risks."
        // }
      />
      <Protection2 data={mistdirect.protection2} />
      <BannerES data={mistdirect.banneres} />
      {/* <Payment /> */}
      {/* <Core4Comp
        comment1={
          "We have installed more than 160 systems around the world with a high rturn on the investment "
        }
        comment2={
          " The automation of the disinfection process off Fish factory allows business to preserve resources and fight costs saving up to 90% water 50-70 % of chemical usage and 100% of staff costs."
        }
      /> */}
      <MistCoreSlider
        imagesprops={mistdirect.mistcoreslider}
        comment0={
          <>
            A frontal strike against bacteria in special <br /> areas of your
            production line
          </>
        }
        comment1={"Mist Direct H-10:"}
        comment2={
          "ALVAR Mist Direct H-10 is a peripheral and fixed system that enables manual mist delivery towards a specific target. Once it has been installed in the chosen location, its user can deploy the mist on any type of equipment, with a handheld portable misting nozzle. The maximum distance that can be reached from the control unit is 8 meters.ALVAR Mist Direct H-10 requires an installation of Alvar Mist Core C-30 installed to be able to use, although it is expected to be soon compatible with Mist Core C-40 too.Mist Direct H-10 has its own control panel, which allows the user to start the disinfection process where the handheld portable misting nozzle is located"
        }
      />
      {/* <MistCoreSlider
        imagesprops={images2}
        comment0={""}
        comment1={"Mist Direct S-20"}
        comment2={
          "  S-20 system is an upgraded and moderised version of the previous model B-10.  While manual starting is still possible, its smart control and easy to use interface enables pre-programming the disinfection cycle starting time, all the controlling is done through the touchscreen on the system."
        }
      /> */}

      {/* <TailerMade data={banner_1} /> */}
      {/* <AboutPanels /> */}
      <MistCoreCards
        industry={category}
        data={mistdirect.mistcorecard}
        link1={`/mist-core/${category}`}
        link2={`/mist-focus/${category}`}
        link3={`/mist-canal/${category}`}
      />
      <EmailForm category={"mistpage"} />
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

export default MistDirectSea;
