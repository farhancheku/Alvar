import React from 'react'
import {  Image } from 'react-bootstrap'

const Midbanner = ({data}) => {
  return (
    <>
    <div style={{display: "flex", justifyContent: "center" }}>
    <div className='midbanner-container'>
        <Image src={data.img_src} className="img-fluid"></Image>
        <p>{data.text_1}</p>
    </div>
    </div>
    </>
  )
}

export default Midbanner