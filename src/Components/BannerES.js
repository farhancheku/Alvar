import React from 'react'
import { Link } from 'react-router-dom'
import "./Stylesheet/style.css"

const BannerES = ({ data }) => {
  return (
    <>
      <div className='banneres'>
        <img src={data.img_src} alt="img" className='img-fluid banneres-img' style={{ position: "relative", zIndex: "-1" }} />
        {data.text_3 ? <div className='banneres-div1'>
          <h4>{data.text_1}</h4>
          <p>{data.text_2}</p>
          <Link to="/careers">{data.text_3}</Link>
        </div> : data.name ?
          <div className='banneres-div2'>
            <h6>{data.text_1}</h6>
            <h4>{data.name}</h4>
            <p>{data.position}</p>
          </div> :
          <h4>{data.text_1}</h4>
        }
      </div>
    </>
  )
}

export default BannerES