import React, { useEffect, useState } from "react";
import Navb from "../Components/Navb";
import Banner2 from "../Components/Banner2";
import data from "../Data/OurStory";
import Protection2 from "../Components/Protection2";
import TailerMade from "../Components/TailerMade";
import Footer2 from "../Components/Footer2";
import Founder from "../Components/Founder";
import Protection3 from "../Components/Protection3";
import Banner from "../Components/Banner";

const OurStory = () => {
  const [expodata, setExpodata] = useState(data);
  useEffect(() => {
    document.title = "OUR STORY";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navb bgColor={"rgba(111, 129, 151,0.5)"} />
      {/* <Banner data={expodata.banner} /> */}
      <Banner data1={expodata.banner} />

      <Protection3 data={expodata.tech} />
      <TailerMade data={expodata.Tailermade} ourstory={"white_txt"} />
      <Founder data={expodata.alvarpoland} />
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
        link5={"/our-story"}
        backcolor={"#D3D3D3"}
        textcolor={"#0c2c5b"}
      />
    </>
  );
};

export default OurStory;
