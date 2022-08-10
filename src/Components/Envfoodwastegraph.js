import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Envfoodwastegraph = ({data}) => {
  return (
    <>
    <Container className='env-foodwastegraph'>
        <Row>
            <Col lg={8} md={8} sm={12}>
                <Image className='img-fluid' src={data.img_src} ></Image>
            </Col>
            <Col lg={4} md={4} sm={12}>
                <h4>{data.text_1}</h4>
                <p>{data.text_2}</p>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Envfoodwastegraph