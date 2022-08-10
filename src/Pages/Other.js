import React, { useState, useEffect } from "react";

import Navb from "../Components/Navb";
import Banner2 from "../Components/Banner2";
import SendUs from "../Components/SendUs";
import Footer2 from "../Components/Footer2";
import Contactform from "../Components/Contactform";
import Findus from "../Components/Findus";
import BannerES from "../Components/BannerES";
import data from "../Data/Other";

const Other = () => {
  const [enquiry, setEnquiry] = useState(data);

  useEffect(() => {
    document.title = "OTHER";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navb
        bgColor={"rgba(111, 129, 151,0.45)"}
      />
      <Banner2 data={enquiry.banner} pageName={"Other Industries"} />
      <SendUs data={enquiry.sendus} pageName={"Send us an enquiry"} />
      <BannerES data={enquiry.banneres} />
      <Contactform data={enquiry.contactform} category={"enquiry"} />

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

export default Other;
