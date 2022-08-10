import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import Banner2 from '../Components/Banner2'
import NavbarLine from "../Components/NavbarLine";
import FAQuestion from '../Components/FAQuestion'
import IndustryComp from '../Components/IndustryComp';
import Footer2 from '../Components/Footer2'
import Navb from '../Components/Navb'
import Data from "../Data/FAQsdata"


const FAQs = () => {
    const [faqdata, setFaqdata] = useState(Data)
    const [textcolor, setTextcolor] = useState("")
    const [indname, setIndname] = useState("")
    const [indusrtycomp, setIndusrtycomp] = useState(false)
    const [navline, setNavline] = useState("none")
    const [faqs, setFaqs] = useState([])

    const [backcolor, setbackcolor] = useState("")
    const params = useParams();
    const category = params.category;
    
    useEffect(() => {

      if (category === "sea-food"){
        setbackcolor("#0098DA");
        setTextcolor("white")
        setIndname("SeaFood")
        setIndusrtycomp(true)
        setNavline("block")
        setFaqs(faqdata.seafoodfaqs)
      }
  
      else if(category === "meat"){
        setbackcolor("#952B36")
        setTextcolor("white")
        setIndname("Meat")
        setIndusrtycomp(true)
        setNavline("block")
        setFaqs(faqdata.meatfaqs)
      }
  
      else if(category === "poultry"){
        setbackcolor("#ECB533")
        setTextcolor("white")
        setIndname("Poultry")
        setIndusrtycomp(true)
        setNavline("block")
        setFaqs(faqdata.poultryfaqs)
      }
  
      else if(category === "salmon"){
        setbackcolor("#EE6E54")
        setTextcolor("white")
        setIndname("Salmon")
        setIndusrtycomp(true)
        setNavline("block")
        setFaqs(faqdata.salmonfaqs)
      }
      else {
        setbackcolor("#E4E4E4")
        setTextcolor("#0c2c5b")
        setIndname("")
        setIndusrtycomp(false)
        setNavline("none")
        setFaqs(faqdata.homefaqs)
      }
    },[])

    useEffect(() => {
        document.title = category?.toUpperCase()+" FAQs";
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navb bgColor={"rgba(111, 129, 151,0.45)"} 
      faqlink={`/faqs/${category}`}/>
      <NavbarLine lineColor={backcolor} display={navline} />
      <Banner2 data={faqdata.banner} pageName={"FAQs"}/>
      {indusrtycomp && <IndustryComp
        IndName={indname}
        CoreName={"INDUSTRY"}
        color={backcolor}
      />}
      <FAQuestion data={faqs}/>
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
      faqlink={`/faqs/${category}`}
      backcolor={backcolor}
      textcolor={textcolor}/>
    </>
  )
}

export default FAQs