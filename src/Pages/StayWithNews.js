import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../Assets/images/visit-career.png'




const StayWithNews = () => {


   useEffect(() => {
      document.title = "Alvar-News";
      window.scrollTo(0, 0);
    }, []);

   return (
      <>
        <Container
        fluid
        className="imageFULL"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom:"50px",
          padding:"60px"
          // backgroundBlendMode: "overlay",
          // opacity: "1",
          // filter: "brightness(80%)",
        }}
      >
        <Row>
          <Col lg={1} sm={12}></Col>
          <Col lg={4} sm={12}>
            <div>
              <p
                className={
                  // ourstory
                  //   ?
                     "pt-4 tailer-made-text1 color_story"
                  //   : "pt-5 fw-bold tailer-made-text1 color_txt"
                }
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "1.6rem",
                }}
              >
                Stay updated with ALVAR's Newsletter
              </p>          
            </div>
          </Col>
          <Col lg={7} sm={12}></Col>
        </Row>
      </Container>
     


      </>
   )
}
export default StayWithNews;