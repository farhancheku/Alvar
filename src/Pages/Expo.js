import React,{useState} from 'react'
import Navb from '../Components/Navb'
import NavbarLine from '../Components/NavbarLine'
import Footer2 from '../Components/Footer2'
import Banner2 from '../Components/Banner2'
import Protection from '../Components/Protection'
import data from "../Data/expodata"
import Environmentalimpactc from '../Components/Environmentalimpactc'
import Midbanner from '../Components/Midbanner'
import Expoform from '../Components/Expoform'
import Oursolutions from '../Components/Oursolutions'

const Expo = () => {
    const [expodata, setExpodata] = useState(data)
  return (
    <>
    <Navb bgColor={"#6F8197"}/>
    <NavbarLine lineColor={"none"} display={"none"} />
    <Banner2 data={expodata.banner}/>
    <Protection data2={expodata.protection} />
    <Environmentalimpactc data={expodata.Enviromentalimpact} borderColor={"none"}/>
    <Midbanner data={expodata.midbanner}/>
    <Oursolutions data={expodata.oursolutions}/>
    <Expoform data={expodata.contactform} category={"expo"}/>
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
      link5={"/newspage"}
      backcolor={"#E4E4E4"}
      textcolor={"#0c2c5b"}/>
    </>
  )
}

export default Expo