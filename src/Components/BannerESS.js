import React from 'react'
import { Link } from 'react-router-dom'
import "./Stylesheet/style.css"
import { Container , Row , Col} from 'react-bootstrap'


const BannerESS = ({data}) => {
   return (
      <>
         <Container fluid 
          className='mt-5'
          style={{
          backgroundImage:`url(${data.img_src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover"
      }}>
        <Row>
         <Col lg={5} sm={12}>
         <Row>
         <Col lg={6} sm={6}>
            <div>
              <p
              className='pt-4 fw-bold'
              style={{fontSize:"1.8rem",
               lineHeight:"3.5rem",
               color: "white",
               maxWidth:"300px"
          }}
              >  {data.text_1}              
              </p>
                <Col lg={6} sm={12}>
                <div className="">
                    <p
                      className=" text-justify fw-bold"

                      style={{
                        fontSize: ".99rem",
                        color: "white",
                        borderBottom: "3px solid white",
                        // textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {data.name}
                    </p>
                    <p>
                       {data.position}
                    </p>
                   </div> 
                </Col>
                </div>
                <Col lg={7} sm={12}>
                </Col>
                <Col lg={7} sm={12}></Col>
              </Row>
          </Col>
        </Row>
      </Container>
      </>
   )
}

export default BannerESS;