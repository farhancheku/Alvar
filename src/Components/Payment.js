import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-rangeslider";
import Arrow from "../Assets/images/arrowIcon.png";
import "./Stylesheet/style.css"

export default function Payment() {
  const [loanAmount, setLoanAmount] = useState(1);
  const [squareMeter, setSquareMeter] = useState(1);
  const [industry, setIndustry] = useState("");
  const handleChangeStart = () => {
    console.log("Change event started");
  };

  // for formula
  const lab_parameter = 0.80;
  const che_parameter = 0.9;
  const water_parameter = 5;
  const nozzle_parameter = -0.0692809;
  const factory_size = 4;
  //country
  const uk_salary = 3000;
  const uk_dis_price = 1530;
  const uk_monthly_leasing_price_wo_che = 165;
  const uk_monthly_leasing_price_w_che = 215;
  const uk_water_price_m3 = 170;
  //water
  const cleaning_water = 0.25;
  const dis_water = 0.25;
  const white_fish = 5;
  const salmon_processing_water = 2.5;
  const poultry_processing_water = 7;
  const meat_processing_water = 4;
  //chemials
  const seafood_499 = 1.4;
  const salmon_499 = 1.6;
  const poultry_499 = 2;
  const meat_499 = 1.5;
  //labour
  const l_seafood_499 = 1.4;
  const l_salmon_499 = 1.6;
  const l_poultry_499 = 2;
  const l_meat_499 = 1.5;
  //economic parameters
  const constant = 0.161505;
  const m2 = -0.000010091;
  const e_seafood = -0.0692809;
  const e_salmon = -0.0574931;
  const e_meat = -0.0481792;

  //extra
  const chemical_per_nozzle = 4.4226;
  const water_per_nozzle = 267.7374;

  


  const totalCostBeforeAlvar = () => {
    let result = (lab_parameter*squareMeter*uk_salary*252*0.3/60) + (che_parameter*squareMeter*uk_dis_price) + (loanAmount*water_parameter*uk_water_price_m3*cleaning_water*dis_water)
    // let result = (lab_parameter*squareMeter*uk_salary*252*0.3/60);
    // let result2 = (che_parameter*squareMeter*uk_dis_price);
    // let result3 = (loanAmount*water_parameter*uk_water_price_m3*cleaning_water*dis_water)
    // console.log(result, "1")
    // console.log(result2, "2")
    // console.log(result3, "3")
    // console.log(result + result2+ result3)
    // return result + result2+ result3;
    return result;
  }

  const totalCostAfterLeasingWithoutChemical = () => {
    let result = ((constant+m2*squareMeter+nozzle_parameter)*squareMeter)*water_per_nozzle/1000*uk_water_price_m3+((constant+m2*squareMeter+nozzle_parameter)*squareMeter)*chemical_per_nozzle*uk_dis_price+squareMeter*uk_monthly_leasing_price_wo_che*12;
    console.log(result)
    return result;
  }

  const totalCostAfterLeasingWithChemical = () => {
    let result = ((constant+m2*squareMeter+nozzle_parameter)*squareMeter)*water_per_nozzle/1000*uk_water_price_m3+9+squareMeter*uk_monthly_leasing_price_w_che*12;
    console.log(result)
    return result;
  }

  const costSavingWithChemical = () => {
    let result = 1 - (totalCostAfterLeasingWithChemical()/totalCostBeforeAlvar());
    console.log(result)
    return (result * 100).toFixed(2);
  }
  const costSavingWithOutChemical = () => {
    let result = 1 - (totalCostAfterLeasingWithoutChemical()/totalCostBeforeAlvar());
    return result;
  }


  const handleIndustry = (name) => {

    if(industry === name) {
      setIndustry("")
    }else {
      setIndustry(name)
    }

  } 

  const handleChangeComplete = () => {
    console.log("Change event completed");
  };
  return null
  return (
    <>
      <Container fluid style={{ width: "100%" }}>
        <div
          style={{
            fontFamily: "Roboto san-serif",
            paddingTop: "0px",
          }}
          className="container "
        >
          <Row
            style={{ justifyContent: "space-evenly", paddingBottom: "3rem" }}
          >
            <Col
              lg={3}
              sm={12}
              style={{
                // borderTop: "3px solid grey",
                borderBottom: "3px solid grey",
              }}
              className="me-1 p-2"
            >
              <p
                className="fw-bold mt-3"
                style={{ fontSize: "2rem", fontSize: "x-large" }}>
                Preserve resouces by installing ALVAR </p>
                
                
                <p className="fw-bold mt-3"
                style={{ fontSize: "2rem", fontSize: "x-large" }}>Estimate your
                <br></br> Saving*{" "}
                <img
                  src={Arrow}
                  className="img-fluid"
                  style={{ width: "20px",marginLeft : "5rem" }}
                />
              </p>
            </Col>

            <Col
              lg={8}
              sm={12}
              style={{
                borderBottom: "3px solid grey",
              }}
              className="ms-lg-3 "
            >
              <Row className="payRow mt-2">
                <Col lg={4} sm={4} className="d-flex flex-column justify-content-center align-items-center">
                  <p>Select Your Industry</p>
                  <div className="radio-btn">
                    <input type="radio" checked={industry === 'seafood' ? true : false} onClick={() => handleIndustry('seafood')} /><p style={{backgroundColor :"#0098DA"}}>SeaFood</p>
                  </div>
                  <div className="radio-btn">
                    <input type="radio" checked={industry === 'salmon' ? true : false} onClick={() => handleIndustry('salmon')} /><p style={{backgroundColor :"#EE6E54"}}>Salmon</p>
                  </div>
                  <div className="radio-btn">
                    <input type="radio" checked={industry === 'poultry' ? true : false} onClick={() => handleIndustry('poultry')} /><p style={{backgroundColor :"#ECB533"}}>Poultry</p>
                  </div>
                  <div className="radio-btn">
                    <input type="radio" checked={industry === 'meat' ? true : false} onClick={() => handleIndustry('meat')} /><p style={{backgroundColor :"#952B36"}}>Meat</p>
                  </div>
                </Col>
                <Col lg={4} sm={4} className="">
                <div className="payCard">
                  <p style={{fontSize:"0.9rem",margin :"0"}}>Tons of Raw Material processed Every Year</p>
                <span style={{ fontSize: "1rem",background:"black",color:"white",padding:"0px 5px" }}>
                          <span
                            style={{ marginRight: "1rem", cursor: "pointer" , textAlign :"center"}}
                            disabled={loanAmount <= 0}
                            value={loanAmount}
                            onClick={(e) => {
                              if(loanAmount > 1)
                              setLoanAmount(loanAmount - 1);
                            }}
                          >
                            -
                          </span>
                          {loanAmount}
                          <span
                            style={{ marginLeft: "1rem", cursor: "pointer" }}
                            value={loanAmount}
                            onClick={(e) => {
                              setLoanAmount(loanAmount + 1);
                            }}
                          >
                            +
                          </span>
                        </span>
                        <Slider
                          min={1}
                          max={200000}
                          value={loanAmount}
                          onChangeStart={handleChangeStart}
                          onChange={(value) => {
                            setLoanAmount(value);
                          }}
                          onChangeComplete={handleChangeComplete}
                        />
                  <p style={{fontSize:"0.9rem",margin :"0"}}>Factory Squares Meters</p>
                <span style={{ fontSize: "1rem",background:"black",color:"white",padding:"0px 5px" }}>
                          <span
                            style={{ marginRight: "1rem", cursor: "pointer" , textAlign :"center"}}
                            disabled={squareMeter <= 0}
                            value={squareMeter}
                            onClick={(e) => {
                              if(squareMeter > 1)
                              setSquareMeter(squareMeter - 1);
                            }}
                          >
                            -
                          </span>
                          {squareMeter}
                          <span
                            style={{ marginLeft: "1rem", cursor: "pointer" }}
                            value={squareMeter}
                            onClick={(e) => {
                              setSquareMeter(squareMeter + 1);
                            }}
                          >
                            +
                          </span>
                        </span>
                        <Slider
                          min={1}
                          max={31200}
                          value={squareMeter}
                          onChangeStart={handleChangeStart}
                          onChange={(value) => {
                            setSquareMeter(value);
                          }}
                          onChangeComplete={handleChangeComplete}
                        />
                </div>
                </Col>
                <Col lg={4} sm={4} className="">
                  <div className="payCard" style={{textAlign :"center",borderLeft:"3px solid black",padding:"45px 0px" }}>
                    <p>Potential Savings in the Disinfection Process:</p>
                    <h3 style={{fontWeight :"1000", color:"#1E8972"}}>{costSavingWithChemical()}%</h3>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
