import React from 'react'
import { Container } from 'react-bootstrap'

const Singlevideo = ({data,video}) => {
  return (
    <>
    <Container className={video? "mt-5 mb-5":""}>
    <iframe src={`${data.videoSrc}?autoplay=1&muted=1&background=1`} style={{background: "rgba(0,0,0,0.8)"}} width="100%" height="530" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </Container>
    </>
  )
}

export default Singlevideo