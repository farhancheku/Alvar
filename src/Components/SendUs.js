import React from 'react'
import { Col, Row } from 'react-bootstrap'
import data from '../Data/underconst'
import "./Stylesheet/style.css"
const SendUs = ({data, pageName}) => {
  return (
    <>
    <div className="container my-5">
        <Row className='justify-content-evenly'>
            <Col md={3} sm={3} className="sendus-col sendus-col-text1" >
                <h4>
                    {pageName}
                </h4>
            </Col>
            <Col md={8} sm={8} className="sendus-col">
                <h4 style={{maxWidth:"70%", paddingLeft:"50px"}}>{data.text_2}</h4>
                <p>{data.text_3}</p>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default SendUs