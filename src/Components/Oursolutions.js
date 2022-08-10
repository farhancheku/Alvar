import React, { useState ,useEffect} from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Oursolutions = ({ data }) => {
    const[design,setdesign]=useState(true)
    const[style,setstyle]=useState(false)
    useEffect(() => {
        if(data.videoSrc1 && data.videoSrc2 ){
            setdesign(false)
            setstyle(true)
        }
        else{
            setdesign(true)
        }
        
    
          
    }, [])
    
  return (
    <>
      <Container className="oursolution-container  ">
        <h3 className={design ? "list" : ""}>Our Main Solutions</h3>
        <Row
          className={
            design
              ? "oursolution-row1 oursolution-row_news flex-row-reverse align-items-center "
              : "oursolution-row1"
          }
        >
          <Col lg={6} md={6}>
            <div >
              <ul className={design ? "list" : ""}>
                <li>
                  <h4>ALVAR Mist Core</h4>
                </li>
              </ul>
              <p>{data.text_1}</p>
              <p>{design?data.text_3:""}</p>
              
              <div
                className={
                  design
                    ? "oursolution-readmore1   "
                    : "oursolution-readmore"
                }
              >
                <a href="">Read More &#10095;</a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} >
            {data.videoSrc1 ? (
              <div style={{ width: "100%" }} >
                <iframe
                  src={`${data.videoSrc1}`}
                  style={{ background: "rgba(0,0,0,0.8)" }}
                  width="100%"
                  height="285"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            ) : (
              <Image src={data.img_src} className="img-fluid"></Image>
            )}
          </Col>
        </Row>
        {style || data.img_src2
         ? 
        <Row
          className={
            design
              ? "oursolution-row  row_margin    align-items-center row_2"
              : "oursolution-row2 flex-row-reverse row_2 "
          }
        >
          <Col lg={6} md={6}>
            <div className="newspara">
              <h4 className={data.design ? "list" : ""}>
                <li>ALVAR Mist Focus</li>
              </h4>
              <p>{data.text_2}</p>
              <p>{design?data.text_3:""}</p>
              <div
                className={
                  design
                    ? "oursolution-readmore1"
                    : "oursolution-readmore"
                }
              >
                <a href="">Read More &#10095;</a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6}>
            {data.videoSrc2 ? (
              <div style={{ width: "100%" }} >
                <iframe
                  src={`${data.videoSrc2}`}
                  style={{ background: "rgba(0,0,0,0.8)" }}
                  width="100%"
                  height="302"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            ) : (
              <Image src={data.img_src2} className=  "img-fluid"></Image>
            )}
          </Col>
        </Row>
        :""}
      </Container>
    </>
  );
};

export default Oursolutions;
