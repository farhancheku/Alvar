import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

const OurteamSinglecard = ({ data,  team }) => {
    return (
        <>
            <Container className='my-5 our-team-container'>
                <h3>
                    {team}
                </h3>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={4} md={4} sm={4}>
                        <Card style={{ width: '23rem', height: "25.2rem", border: "1px solid rgb(7, 245, 223)" }} className="ourteam-cards">
                            <Card.Img variant="top" src={data.img_src} style={{ padding: '10px' }} />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <div className='d-flex'><h4 style={{marginRight : "1.5rem"}}>ALVAR Ltd.</h4> <p>{data.country}</p></div>
                        <h4 style={{fontWeight : "600"}}>{data.name}</h4>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OurteamSinglecard