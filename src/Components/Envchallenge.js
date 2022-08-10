import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

const Envchallenge = ({data}) => {
  return (
    <>
    <Container className='env-challenge'>
        <Row>
            <Col lg={6} md={6} sm={12}>
              <h4>{data.text_1}</h4>
              <p>{data.text_2}</p>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Image className='img-fluid' src={data.img_src}></Image>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Envchallenge