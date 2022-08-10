import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Table = () => {
  return (
    <>
        <Container className='pb-5 table-container' style={{margin :"auto", borderBottom:"3px solid grey"}}>
            <Image src="/images/table.png" className='img-fluid'></Image>
            <p>Test taken at Fish + Fish factory (rebranded as Atlas Premium) in Latvia, 2019</p>
        </Container>
    </>
  )
}

export default Table