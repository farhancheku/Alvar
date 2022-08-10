import React,{useState, useEffect} from 'react'
import Navb from '../Components/Navb'
import Banner2 from '../Components/Banner2'
import data from "../Data/ourteamdata"
import Ourteamabout from '../Components/Ourteamabout'
import Footer2 from "../Components/Footer2"
import BannerES from '../Components/BannerES'
import OurteamSinglecard from '../Components/OurteamSinglecard'
import Singlevideo from '../Components/Singlevideo'

const OurTeam = () => {
  const [teamdata, setTeamdata] = useState(data)

  useEffect(() => {
    document.title = "Our Team";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navb bgColor={"rgba(111, 129, 151,0.45)"}/>
    <Banner2 data={teamdata.banner} pageName={"OUR TEAM"}/>
    <Ourteamabout data={teamdata.ourteamabout.ourteam} team={"Our Team"}/>
    <BannerES data={teamdata.bannerescareer} />
    <Ourteamabout data={teamdata.ourteamabout.administration} team={"Administration"}/>
    <BannerES data={teamdata.bannereseng} />
    <Ourteamabout data={teamdata.ourteamabout.SAComittee} team={"Science Advisory Committee"}/>
    <OurteamSinglecard data={teamdata.alvaruk} team={"ALVAR Limited, United Kingdom"}/>
    <Ourteamabout data={teamdata.ourteamabout.alvarpoland} team={"ALVAR Sp.z o.o., Polande Advisory Committee"}/>
    <Singlevideo data={teamdata.video}/>
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

export default OurTeam