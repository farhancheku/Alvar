import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Stylesheet/style.css"

const Environmentalimpactc = ({data , borderColor}) => {
  return (
    <>
    <Container className="my-3">
        <Row>
            <Col lg={3} md={3} sm={12} className='enviromental-impact-text mx-2' style={{borderTop : `3px solid ${borderColor}`,borderBottom:`3px solid ${borderColor}`}}><h5>{data.text_1}</h5></Col>
            <Col lg={2} md={2} sm={12} className='enviromental-impact-text' style={{borderTop : `3px solid ${borderColor}`,borderBottom:`3px solid ${borderColor}`}}><h4>{data.text_2}</h4><p>Water Savings</p></Col>
            <Col lg={3} md={3} sm={12} className='enviromental-impact-text' style={{borderTop : `3px solid ${borderColor}`,borderBottom:`3px solid ${borderColor}`}}><h4>{data.text_3}</h4><p>Chemical Savings</p></Col>
            <Col lg={3} md={3} sm={12} className='enviromental-impact-text' style={{borderTop : `3px solid ${borderColor}`,borderBottom:`3px solid ${borderColor}`}}><h4>{data.text_4}</h4><p>increase in shelf life</p></Col>
        </Row>
    </Container>
    </>
  )
}

export default Environmentalimpactc