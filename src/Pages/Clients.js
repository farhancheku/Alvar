import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner2 from "../Components/Banner2";
import Clientsabout from "../Components/Clientsabout";
import Clientscard from "../Components/Clientscard";
import Navb from "../Components/Navb";
import NavbarLine from "../Components/NavbarLine";
import Protection3 from "../Components/Protection3";
import Footer2 from "../Components/Footer2";
import data from "../Data/Clientsdata";
import clientseafooddata from "../Data/Clientseafood";
import clientmeatdata from "../Data/clientmeatdata";
import clientpoultrydata from "../Data/Clientpoultrydata";
import clientsalmondata from "../Data/Clientsalmondata";
import Graphs from "../Components/Graphs";
import Clientssendenquiry from "../Components/Clientssendenquiry";
import Singleimage from "../Components/Singleimage";
import Banner from "../Components/Banner";

const Clients = () => {
  const [clientdata, setClientdata] = useState(data);
  const [textcolor, setTextcolor] = useState("");
  const [navcolor, setNavcolor] = useState("");
  const [navline, setNavline] = useState("none");
  // const [faqs, setFaqs] = useState([])

  const [backcolor, setbackcolor] = useState("");
  const params = useParams();
  const category = params.category;

  useEffect(() => {
    if (category === "sea-food") {
      setbackcolor("#0098DA");
      setNavcolor("#0098DA");
      setTextcolor("white");
      setNavline("block");
      setClientdata(clientseafooddata);
    } else if (category === "meat") {
      setbackcolor("#952B36");
      setNavcolor("#952B36");
      setTextcolor("white");
      setNavline("block");
      setClientdata(clientmeatdata);
    } else if (category === "poultry") {
      setbackcolor("#ECB533");
      setNavcolor("#ECB533");
      setTextcolor("white");
      setNavline("block");
      setClientdata(clientpoultrydata);
    } else if (category === "salmon") {
      setbackcolor("#EE6E54");
      setNavcolor("#EE6E54");
      setTextcolor("white");
      setNavline("block");
      setClientdata(clientsalmondata);
    } else {
      setbackcolor("#E4E4E4");
      setNavcolor("#6F8197");
      setTextcolor("#0c2c5b");
      setNavline("none");
      setClientdata(data);
    }
  }, []);

  console.log(clientdata, "cdata");

  useEffect(() => {
    document.title = "CLIENTS";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navb bgColor={"rgba(4,53,94,0.45)"} clientlink={`/clients/${category}`} />
      <NavbarLine lineColor={backcolor} display={navline} />
      {/* <Banner2 data={clientdata.banner} pageName={"Clients"} /> */}
      <Banner data1={clientdata.banner} />
      <Protection3 data={clientdata.protection3} />
      <Clientscard data={clientdata.clientscard} />
      <Clientssendenquiry data={clientdata.clientssendenquiry} />
      {/* <TailerMade/> */}
      <Clientsabout data={clientdata.clientsabout} />
      {clientdata.clientmeatlogo && (
        <Singleimage data={clientdata.clientmeatlogo} />
      )}
      <Graphs data={clientdata.graphs} />
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
        clientlink={`/clients/${category}`}
        backcolor={backcolor}
        textcolor={textcolor}
      />
    </>
  );
};
export default Clients;
