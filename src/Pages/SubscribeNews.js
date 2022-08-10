import { Col, Container, Image, Row } from "react-bootstrap";
import { Grid } from "swiper";
import logo from '../Assets/images/AlvarNewss.png';

const SubscribeNews = () => {
   
   return (
      <>
         <Container className="mb-5 p-5"
         >
         <div className="container mt-5"
         style={{border: "2px solid #00FFD3",
         padding:"30px"}}>
            <Row>
               <Col lg={7} sm={12} md={12}>
                 <Image
                  src={logo}
                  style={{ width: "100%" }}
                  alt="haris munir"
                  className="subnews1 img-fluid"
                >                   
                </Image>                
               </Col>   
               <Col lg={5} sm={12} md={12}>
               <div className="subnews">
               <div>
                  <h3 className="fw-bold">Subscribe to our newsletter</h3>
               </div>
               <div className="mt-4">
                  <p className="paranews">Know more about ALVAR and stay updated about the latest news in the food industry in iceland and Worldwide</p>
               </div>
               </div>   
               </Col>     
               </Row>   
         </div>       
      </Container>
      </>
   )
}
export default SubscribeNews;