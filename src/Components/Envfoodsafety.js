import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Envfoodsafety = ({data}) => {
  return (
    <>
    <Container className='my-3'>
        <Row>
            <Col lg={2} md={2} sm={12}>
                <h4>{data.text_1}</h4>
            </Col>
            <Col lg={10} md={10} sm={12}>
                <p className='my-5'>{data.text_2}</p>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Envfoodsafety