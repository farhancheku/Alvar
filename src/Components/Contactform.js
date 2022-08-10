import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "./Stylesheet/style.css"

import EmailForm from "../Components/EmailForm";


const Contactform = ({data, category}) => {
  return (
    <>
        <Container fluid className='my-5' >
            <Row>
                <Col md={6}>
                    <div className="contactform-col">
                        
                    <h3>{data.text_1}</h3>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='contactform-col'>
                    <p>let us Know How can we Help You</p>
                        <EmailForm category={category}/> 
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contactform