import React, { useState, useEffect } from "react";
import Mistnavb from "../../Components/Mistnavb";
import NavbarLine from "../../Components/NavbarLine";
import Banner from "../../Components/Banner";
import IndustryComp from "../../Components/IndustryComp";
import Protection from "../../Components/Protection";
import MistCoreSlider from "../../Components/MistCoreSlider";
import bannerseaFood2 from "../../Assets/SeaFood/n_12.png";
import c30 from "../../Assets/SeaFood/c-30.png";
import c40 from "../../Assets/SeaFood/c-40.png";
import Mistfooter from "../../Components/Mistfooter";
import AboutPanels from "../../Components/AboutPanels";
import MistCoreCards from "../../Components/MistCoreCards";
import EmailForm from "../../Components/EmailForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import BannerES from "../../Components/BannerES";
import mistcanalbanner from "../../Assets/images/mistcanalbanner.png";
import Data from "../../Data/mistcanaldata";
import Protection2 from "../../Components/Protection2";

const MistCanalSea = () => {
  const [backcolor, setbackcolor] = useState("");

  const [mistcanal, seTmistcanal] = useState(Data);
  
  const [name, setName] = useState("");

  
  const [color, setColor] = useState("");

  const params = useParams();
  const category = params.category;

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

  const images1 = [{ img12: c30 }, { img12: c30 }, { img12: c30 }];
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
    document.title = "MIST-CANAL";
    window.scrollTo(0, 0);
  }, []);
  console.log(data1);
  console.log(mistcanal.banner);

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
        comment3={"MIST CANAL"}
  /> */}

      <Banner Src={mistcanalbanner} data1={mistcanal.banner} />
      <IndustryComp IndName={name} CoreName={"INDUSTRY"} color={backcolor} />
      <Protection
        data2={mistcanal.protection}
        // comment1={"What is Mist Focus"}
        // comment2={
        //   "An ALVAR solution to fight bacteria in pipes, thanks and pupms."
        // }
        // comment3={"ALVAR MIST CANAL"}
        // comment4={
        //   "Bacteria can grow in reduced spaces and attack Fish and seafood factories by infecting pipes, tanks, or pupms. Mist canal creates a mic of water and disinfection chemical, which navigatws through machinery to strategically combat harmful microbes and reduce production and reputational risks."
        // }
      />
      {/* <Payment /> */}
      <Protection2 data={mistcanal.protection2} />
      <BannerES data={mistcanal.banneres} />
      {/* <Core4Comp
        comment1={
          "We have installed more than 160 systems around the world with a high rturn on the investment "
        }
        comment2={
          " The automation of the disinfection process off Fish factory allows business to preserve resources and fight costs saving up to 90% water 50-70 % of chemical usage and 100% of staff costs."
        }
      /> */}
      <MistCoreSlider
        imagesprops={mistcanal.mistcoreslider2}
        comment0={
          <>
            Reinforce your rear-guard <br /> with ALVAR Mist Canal
          </>
        }
        comment1={"Mist Canal M-10"}
        comment2={
          " ALVAR Mist Canal M-10 consists of a central system that allows controlling the mixture of disinfectant chemicals and water, as well as the duration of the disinfection cycle, and runs this disinfectant through pipes, tanks and pumps. Additionally,in order to rinse the pipes, tanks and pupms after the proper disinfection, Mist canal M-10 can also be run with only clean water. Additionally,in order to rinse the pipes, tanks and pupms after the proper disinfection, Mist canal M-10 can also be run with only clean water."
        }
      />
      {/* <MistCoreSlider
        imagesprops={images2}
        comment0={""}
        comment1={"Mist Canal S-20"}
        comment2={
          " S-20 system is an upgraded and moderised version of the previous model B-10. While manual starting is still possible, its smart control and easy to use interface enables pre-programming the disinfection cycle starting time, all the controlling is done through the touchscreen on the system. S-20 can be connected to the internet which allows recording system start/stop times as well as changing settings or starting the system.When S-20 is connected to the internet,and APP to control the system can be used too."
        }
      /> */}

      {/* <TailerMade data={banner_1}/> */}
      {/* <AboutPanels /> */}
      <MistCoreCards
        data={mistcanal.mistcorecard}
        industry={category}
        link1={`/mist-core/${category}`}
        link2={`/mist-focus/${category}`}
        link3={`/mist-direct/${category}`}
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

export default MistCanalSea;
