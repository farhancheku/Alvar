import React from 'react'
import { Container, Accordion } from 'react-bootstrap'

const FAQuestion = ({ data }) => {
    return (
        <>
            <Container className='my-5'>
                <h2>FAQs</h2>
                <Accordion defaultActiveKey="0" className='accordion-flush'>
                    {data.map((faq) => (
                        <Accordion.Item className='my-3' eventKey={faq.ques} key={faq.ques}>
                            <Accordion.Header>{faq.ques}</Accordion.Header>
                            <Accordion.Body>
                                {faq.ans}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </>
    )
}

export default FAQuestion