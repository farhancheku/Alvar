import React from 'react'
import { Col, Row ,Image} from 'react-bootstrap'
import data from '../Data/underconst'
import "./Stylesheet/style.css"

const New_tech = ({data}) => {

  return (
   <>
    <div className="container my-5">
        <Row className='justify-content-evenly'>
            <Col md={3} sm={3} className="read-col sendus-col-text1" >
                <h4>
                    {data.text_1}
                </h4>
                {data.read?
            <div className='readmore'>
                        <a href="">Read More &#10095;</a>
                    </div>:""
                }
            </Col>
            <Col md={8} sm={8} className="sendus-col " >
            
            <Image src={data.img_src} className="img-tech"></Image>
            
                
            </Col>
        </Row>
    </div>

   </>
  )
}

export default New_tech