import React, { useState, useEffect } from 'react'
import Banner2 from '../Components/Banner2'
import Footer2 from '../Components/Footer2'
import Navb from '../Components/Navb'
import SendUs from '../Components/SendUs'
import data from "../Data/underconst"
import { useParams } from 'react-router-dom';

const Underconstruction = () => {
    const [underc, setUnderc] = useState(data);
    const params = useParams();
    const {pageName} = params;
    useEffect(() => {
      document.title = "Under Construction";
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <Navb bgColor={"#6F8197"}
    />
    <Banner2 pageName={pageName} data={underc.banner}/>
    <SendUs pageName={pageName} data={underc.sendus}/>
    <Footer2 comment0={"Sea Food"}
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

export default Underconstruction