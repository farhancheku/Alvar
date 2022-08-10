import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "./Stylesheet/style.css"

const Expoform = ({data}) => {
  return (
    <>
    <Container fluid >
            <Row className="pt-5 expoform">
                 <p>Do You Want To Know More</p>
                <Col md={6}>
                    <div className="contactform-col">
                        
                    <h3>{data.text_1}</h3>
                    {data.img_src && <Image src={data.img_src} className="contactform-img"></Image>}
                    </div>
                </Col>
                <Col md={4}>
                    <div className='contactform-col'>
                        <h4>Contact Us Directly:</h4>
                        <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6UN8fNyH5OEdA8tMe81zDaEmhZk4U15UTWGDmqRSBe0VlDbbSHfWlywmx27epC8mFJ">
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Expoform