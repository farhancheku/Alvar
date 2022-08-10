import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const Ourteamabout = ({ data, team }) => {
    console.log(data, "team")
    return (
        <>
            <Container className='my-5 team-container'>
                <h3>
                    {team}
                </h3>
                    <Row className='justify-content-center'>
                        {data.map((item) => (
                            <Col lg={4} md={6} sm={12} className="my-3">
                                <Card style={{ width: '23rem', height: "27rem", border: "1px solid rgb(7, 245, 223)" }} className="ourteam-cards">
                                    <Card.Img variant="top" src={item.img_src} style={{ padding: '10px' }} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.position}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
            </Container>
        </>
    )
}

export default Ourteamabout