import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./Stylesheet/style.css"
import findimg1 from "../Assets/images/findimg1.png"
import findimg2 from "../Assets/images/findimg2.png"


const Findus = () => {
  return (
    <>
    <Container fluid className='findus-container py-5'>
        <h4>Where to find us</h4>
        <Row className='justify-content-evenly findus-row'>
            <Col md={6} sm={12} className="findus-col">
                <Card style={{width : "20rem"}}>
                        <Card.Img variant='top' src={findimg1}/>
                    <div style={{marginLeft:"2rem"}}>
                        <Card.Text>Iceland</Card.Text>
                        <Card.Title>Alvar ehf.</Card.Title>
                        <Card.Text style={{margin :"0"}}>Urðarhvarf 14</Card.Text>
                        <Card.Text>203 Kópavogur</Card.Text>
                    </div>
                        <div className='container d-flex justify-content-between mt-2 findus-contact'>
                            <Card.Text>info@alvar.is</Card.Text>
                            <Card.Text>+354 5508300</Card.Text>
                        </div>
                </Card>
            </Col>
            <Col md={6} sm={12} className="findus-col">
                <Card style={{width : "20rem"}}>
                        <Card.Img variant='top' src={findimg2}/>
                    <div style={{marginLeft:"2rem"}}>
                        <Card.Text>Iceland</Card.Text>
                        <Card.Title>ALVAR Sp. z.o.o.</Card.Title>
                        <Card.Text style={{margin :"0"}}>Park Prologis III, ul. Graniczna 8C/DC2b</Card.Text>
                        <Card.Text>54-610 Wrocław</Card.Text>
                    </div>
                    <div className='container d-flex justify-content-between mt-2 findus-contact'>
                            <Card.Text>info@alvar.is</Card.Text>
                            <Card.Text>+354 5508300</Card.Text>
                        </div>
                </Card></Col>
        </Row>
    </Container>
    </>
  )
}

export default Findus