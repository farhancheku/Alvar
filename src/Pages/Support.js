import React, {useState, useEffect} from 'react'
import Navb from "../Components/Navb";
import Banner2 from "../Components/Banner2"
import SendUs from '../Components/SendUs';
import Footer2 from '../Components/Footer2';
import Contactform from '../Components/Contactform';
import Findus from '../Components/Findus';
import BannerES from '../Components/BannerES';
import data from "../Data/supportdata";

const Support = () => {
  const [supportdata, setSupportdata] = useState(data);
  useEffect(() => {
    document.title = "Alvar Support";
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
            <Navb bgColor={"rgba(111, 129, 151,0.45)"}/>
            <Banner2 data={supportdata.banner} pageName={"support"}/>
            <SendUs data={supportdata.sendus} pageName={"support"}/>
            <BannerES data={supportdata.banneres}/>
            <Contactform data={supportdata.contactform} category={"support"}/>
            <Findus/>
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
              textcolor={"#0c2c5b"}/>
        </>
      )
}

export default Support