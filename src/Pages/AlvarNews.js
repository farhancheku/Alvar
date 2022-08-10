import React from 'react'
import Navb from "../Components/Navb";
import NavbarLine from "../Components/NavbarLine";
import Footer2 from "../Components/Footer2";
import SubscribeNews from './SubscribeNews';
import StayWithNews from './StayWithNews';


const AlvarNews = () => {

   return(
      <>
      <Navb bgColor={"rgba(4,53,94,0.45)"} />
      <NavbarLine lineColor={"none"} display={"none"} />
      <SubscribeNews/>
      <StayWithNews/>
      <Footer2
        comment0={"Seafood"}
        comment1={"Meat"}
        comment2={"Poultry"}
        comment3={"Salmon"}
        comment4={"Others"}
        link1={"/sea-food"}
        link2={"/meat"}
        link3={"/poultry"}
        link4={"/salmon"}
        link5={"/newspage"}
        backcolor={"#E4E4E4"}
        textcolor={"#0c2c5b"}
      />
      </>

   )

}
export default AlvarNews;