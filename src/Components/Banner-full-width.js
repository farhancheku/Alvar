import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

// export default function Banner({ Src, comment1, comment2, comment3 }) {
export default function Banner({ Src, data1, videoSrc }) {
  const [index, setIndex] = useState(0);
  // console.log(data1, "dfjkhj");
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carousel = [
    {
      img: data1.img_src,
      text_1: data1.text_1,
      text_2: data1.text_2,
      text_3: data1.text_3,
      text_4: data1.text_4,
      text_5: data1.text_5,
      pageName: data1.pageName,
    },
    {
      img: data1.img_src,
      text_1: data1.text_1,
      text_2: data1.text_2,
      text_3: data1.text_3,
      text_4: data1.text_4,
      pageName: data1.pageName,
    },
    {
      img: data1.img_src,
      text_1: data1.text_1,
      text_2: data1.text_2,
      text_3: data1.text_3,
      text_4: data1.text_4,
      pageName: data1.pageName,
    },
  ];

  return (
    <div className="bannerCaro">
      {videoSrc ? <div style={{width: "100%", maxHeight: 1000, overflow: "hidden", display: "flex", alignItems: "flex-end"}}>
      <iframe src={`${videoSrc}?autoplay=1&muted=1&background=1`} style={{background: "rgba(0,0,0,0.8)"}} width="100%" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      
      </div> :
      <Carousel activeIndex={index} onSelect={handleSelect} className="navb">
        {
          // carousel &&
          carousel.map((e, i) => (
            <Carousel.Item>
              <img
                className="carouselImage img-fluid"
                src={e.img}
                alt="First slide"
                style={{ opacity: "1", filter: "brightness(30%)" }}
              />

              <Carousel.Caption>
                <div>
                  <h1 className="carouselHeading">{e.text_1} </h1>
                  <h1 style={{fontWeight:"600"}}>{e.text_2}</h1>
                  <h1>{e.text_3}</h1>
                </div>
                  {/* <h3 style={{margin:"-2rem 0rem 0rem 15rem", fontSize : "1rem"}}>{e.pageName}</h3> */}
              </Carousel.Caption>

              <p className="caroText">
                <p>
                  {e.text_4}
                  <br />
                  <span>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "#00b894" }}
                    >
                      {e.text_5}
                    </a>
                  </span>
                </p>
              </p>
              <div
                className=""
                style={{
                  // backgroundColor: "black",
                  width: "100%",
                  height: "auto",
                  position: "absolute",
                  top: "85%",
                  // zIndex: "1212",
                }}
              >
                <div
                  className="text-light "
                  style={{ position: "relative", left: "90%" }}
                >
                  <div>0{i + 1}</div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#fff",
                    position: "relative",
                    // marginTop: "-0px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#fff",
                      position: "absolute",
                    }}
                  ></div>
                </div>
                <div
                  className="text-light "
                  style={{ position: "relative", left: "90%" }}
                >
                  <div>0{carousel.length}</div>
                </div>
              </div>
            </Carousel.Item>
          ))
        }
      </Carousel>}

      
      {/* <div
        className=""
        style={{
          // backgroundColor: "black",
          width: "100%",
          height: "auto",
          position: "absolute",
          top: "60%",
          zIndex: "1212",
        }}
      >
        <div
          className="text-light "
          style={{ position: "relative", left: "90%" }}
        >
          <div>01</div>
        </div>
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#fff",
            position: "relative",
            // marginTop: "-0px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#fff",
              position: "absolute",
            }}
          ></div>
        </div>
        <div
          className="text-light "
          style={{ position: "relative", left: "90%" }}
        >
          <div>03</div>
        </div>
      </div> */}
    </div>
  );
}



{
  /* <div
className=""
style={{
  backgroundColor: "black",
  width: "100%",
  height: "auto",
  position: "absolute",
  top: "90%",
  zIndex: "1212",
}}
>
<div
  className="text-light "
  style={{ position: "relative", left: "90%" }}
>
  {i + 1}
</div>{" "}
</div> */
}
