import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import $ from 'jquery';

const Envstatementpolicy = ({ data }) => {
    $( "#env-statement-button" ).click(function() {
        $( "#env-statement-image" ).hide(2000);
      });
    return (
        <>
            <Container className='env-statement my-5'>
                <Row>
                    <Col lg={2} md={2} sm={12}>
                        <div className='env-statement-right'>
                            <h4>{data.text_right}</h4>
                            <button id="env-statement-button">Read More &#10095;</button>
                        </div>
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                        <Image src={data.img_src} id="env-statement-image" className="img-fluid"></Image>
                        <div id="env-statement-left" className='env-statement-left'>
                            <p>{data.text_1}</p>
                            <p>{data.text_2}</p>
                            <ul>
                                <li>{data.li_1}</li>
                                <li>{data.li_2}</li>
                                <li>{data.li_3}</li>
                                <li>{data.li_4}</li>
                                <li>{data.li_5}</li>
                                <li>{data.li_6}</li>
                                <li>{data.li_7}</li>
                                <li>{data.li_8}</li>
                                <li>{data.li_9}</li>
                                <li>{data.li_10}</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Envstatementpolicy