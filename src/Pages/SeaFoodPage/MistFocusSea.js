import React, { useState, useEffect } from "react";
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
import bannerseaFood2 from "../../Assets/SeaFood/n_12.png";
import c30 from "../../Assets/SeaFood/n_13.png";
import c40 from "../../Assets/SeaFood/n_14.png";
import Mistfooter from "../../Components/Mistfooter";
import MistCoreCards from "../../Components/MistCoreCards";
import EmailForm from "../../Components/EmailForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import data from "../../Data/mistfocusdata";
import Focusprotection from "../../Components/Focusprotection";
import Table from "../../Components/Table";
const MistFocusSea = () => {
  const [backcolor, setbackcolor] = useState("");
  const [mistfocus, setMistfocus] = useState(data);
  const [showTable, setShowTable] = useState(false);

  const params = useParams();
  const category = params.category;

  const [name, setName] = useState("");

  const [color, setColor] = useState("");


  console.log(category);
  console.log({ category });

  useEffect(() => {
    if (category === "sea-food") {
      setbackcolor("#0098DA");
      setShowTable(true);
      setName("Seafood");
      setColor("rgba(0, 152, 218, 0.45)");
    } else if (category === "meat") {
      setbackcolor("#952B36");
      setShowTable(false);
      setName("MEAT");
      setColor("rgba(149,43,54,0.45)");
    } else if (category === "poultry") {
      setbackcolor("#ECB533");
      setShowTable(false);
      setName("POULTRY");
      setColor("rgba(236,181,51,0.45)");
    } else if (category === "salmon") {
      setbackcolor("#EE6E54");
      setShowTable(true);
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
    document.title = "MIST-FOCUS";
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
        comment3={"MIST FOCUS"}
      /> */}
      <Banner
        Src={bannerseaFood2}
        data1={mistfocus.banner}
        // videoSrc={mistfocus.videoSrc}
      />
      <IndustryComp IndName={name} CoreName={"INDUSTRY"} color={backcolor} />
      <Protection
        data2={mistfocus.protection}
        // comment1={"What is ALVAR Mist Focus"}
        // comment2={
        //   "An ALVAR solution to combat bacteria inside enclosed machinery"
        // }
        // comment3={"ALVAR MIST FOCUS"}
        // comment4={
        //   "A Strategic adaptation of ALVAR Mist system to penereare and attack harmfull bacteria inside enclosed Fish processing machinery. The prorection of difficult to reach areas reduces production risks and business reputational risks,while increasing food safety tremendously.  "
      />
      <Focusprotection data={mistfocus.focusprotection} />
      {showTable && <Table />}
      {/* <Payment /> */}
      {/* <Core4Comp
        comment1={
          "Preserve resouces by installing ALVAR Mist Core estimate your saving "
        }
        comment2={
          " The automation of the disinfection process off Fish factory allows business to preserve resources and fight costs saving up to 90% water 50-70 % of chemical usage and 100% of staff costs."
        }
      /> */}
      <MistCoreSlider
        imagesprops={mistfocus.mistcoreslider}
        comment0={
          <>
            We have developed two models of ALVAR <br /> Mist Focus, adapting
            the system to the client's needs:
          </>
        }
        comment1={"Mist Focus B-10"}
        comment2={
          "  B-10 is a cost-effective, small and straightforward solution, developed to deploy the mist in enclosed areas, infiltrating and combatting bacteria inside of processing machinery, small refrigeration/freezing units or common area, like  toilets or stairways.  After being manually activated, the rest of the process is carried out automatically by the B-10 model. The  disinfection cycle time is pre-set depending on where the system is installed and the specific needs. One Mist Focus B-10 system can have up to 5 misting nozzles, and the process relies on in-house water supply pressure which must be at least 4 bars. "
        }
      />
      <MistCoreSlider2
        imagesprops={mistfocus.mistcoreslider2}
        comment0={""}
        comment1={"Mist Focus S-20"}
        comment2={
          "  S-20 system is an upgraded and moderised version of the previous model B-10.  While manual starting is still possible, its smart control and easy to use interface enables pre-programming the disinfection cycle starting time, all the controlling is done through the touchscreen on the system."
        }
      />

      <TailerMade data={mistfocus.Tailermade} />
      {/* <AboutPanels /> */}
      <MistCoreCards
        industry={category}
        data={mistfocus.mistcorecard}
        link1={`/mist-core/${category}`}
        link2={`/mist-canal/${category}`}
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

export default MistFocusSea;
