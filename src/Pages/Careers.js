import React, { useEffect, useState } from "react";
import Navb from "../Components/Navb";
import Banner2 from "../Components/Banner2";
import data from "../Data/Careers";
import Protection2 from "../Components/Protection2";
import TailerMade from "../Components/TailerMade";
import Footer2 from "../Components/Footer2";
import Founder from "../Components/Founder";
import Singlevideo from "../Components/Singlevideo";
import Protection3 from "../Components/Protection3";

const Careers = () => {
  const [expodata, setExpodata] = useState(data);
  useEffect(() => {
    document.title = "CAREERS";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navb bgColor={"rgba(111, 129, 151,0.45)"}/>
      <Banner2 data={expodata.banner} />

      <Protection3 data={expodata.tech} />
      <TailerMade data={expodata.Tailermade} ourstory={"white_txt"} />

      <Singlevideo data={expodata.video} video={"video"} />

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
        link5={"/careers"}
        backcolor={"#D3D3D3"}
        textcolor={"#0c2c5b"}
      />
    </>
  );
};

export default Careers;
