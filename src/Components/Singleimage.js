import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Singleimage = ({data}) => {
  return (
    <>
    <Container>
        <Image src={data.img_src} className="img-fluid"></Image>
    </Container>
    </>
  )
}

export default Singleimage