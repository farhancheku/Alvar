import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navb from "../Components/Navb";
import NavbarLine from "../Components/NavbarLine";
import Banner2 from "../Components/Banner2";
import Footer2 from "../Components/Footer2";
import Environmentalimpactc from "../Components/Environmentalimpactc";
import Data from "../Data/envimpactdata";
import Envimpmidbanner from "../Components/Envimpmidbanner";
import Envchallenge from "../Components/Envchallenge";
import SysComp from "../Components/SysComp";
import IndustryComp from "../Components/IndustryComp";
import Envfoodwastegraph from "../Components/Envfoodwastegraph";
import Envfoodsafety from "../Components/Envfoodsafety";
import Envstatementpolicy from "../Components/Envstatementpolicy";
import Banner from "../Components/Banner";

const Environmentalimpact = () => {
  const [envdata, setEnvdata] = useState(Data);
  const [textcolor, setTextcolor] = useState("");
  const [indname, setIndname] = useState("");
  const [indusrtycomp, setIndusrtycomp] = useState(false);
  const [navline, setNavline] = useState("none");
  const [midbanner, setMidbanner] = useState("");
  const [color, setColor] = useState("");

  const [backcolor, setbackcolor] = useState("");
  const params = useParams();
  const category = params.category;
  useEffect(() => {
    if (category === "sea-food") {
      setbackcolor("#0098DA");
      setTextcolor("white");
      setIndname("SeaFood");
      setIndusrtycomp(true);
      setNavline("block");
      setMidbanner(envdata.seafoodmidbanner);
      setColor("rgba(0, 152, 218, 0.45)");
    } else if (category === "meat") {
      setbackcolor("#952B36");
      setTextcolor("white");
      setIndname("Meat");
      setIndusrtycomp(true);
      setNavline("block");
      setMidbanner(envdata.meatmidbanner);
      setColor("rgba(149,43,54,0.45)");
    } else if (category === "poultry") {
      setbackcolor("#ECB533");
      setTextcolor("white");
      setIndname("Poultry");
      setIndusrtycomp(true);
      setNavline("block");
      setMidbanner(envdata.poultrymidbanner);
      setColor("rgba(236,181,51,0.45)");
    } else if (category === "salmon") {
      setbackcolor("#EE6E54");
      setTextcolor("white");
      setIndname("Salmon");
      setIndusrtycomp(true);
      setNavline("block");
      setMidbanner(envdata.salmonmidbanner);
      setColor("rgba(238,110,84,0.45)");
    } else {
      setbackcolor("#E4E4E4");
      setTextcolor("#0c2c5b");
      setIndname("");
      setIndusrtycomp(false);
      setNavline("none");
      setMidbanner(envdata.midbanner);
    }
  }, []);

  useEffect(() => {
    document.title = "Environmental Impact";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navb bgColor={color} envlink={`/environmental-impact/${category}`} />
      <NavbarLine lineColor={backcolor} display={navline} />
      {/* <Banner2 data={envdata.banner} pageName={"Environmental Impact"} /> */}
      <Banner data1={envdata.banner} />
      {indusrtycomp && (
        <IndustryComp
          IndName={indname}
          CoreName={"INDUSTRY"}
          color={backcolor}
        />
      )}
      <Environmentalimpactc
        data={envdata.Enviromentalimpact}
        borderColor={"grey"}
      />
      <Envimpmidbanner data={midbanner} />
      <Envchallenge data={envdata.envchallenge} />
      <SysComp data={envdata.syscomp} />
      <Envfoodwastegraph data={envdata.enfoodwastegraph} />
      <Envfoodsafety data={envdata.foodsafety} />
      <Envstatementpolicy data={envdata.envstatement} />
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
        envlink={`/environmental-impact/${category}`}
        backcolor={backcolor}
        textcolor={textcolor}
      />
    </>
  );
};

export default Environmentalimpact;
