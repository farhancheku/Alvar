import React from "react";
import img3 from "../Assets/SeaFood/h_10.png";
import img1 from "../Assets/images/corecard1.png";
import img2 from "../Assets/images/corecard2.png";
import { Link } from "react-router-dom";

const MistCoreCards = ({ data, industry, link1, link2, link3 }) => {
  console.log(data.img_src1);
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center">
            <div
              className="fw-bold"
              style={{ fontSize: "1.5rem", color: "#000" }}
            >
              Our system has been adapted to guarantee protection in the
              different steps of the {industry} production line.
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <Link to={link1}>
              <div className="preserCard">
                <div
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${data.img_src1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "object-fit",
                    height: "300px",
                    objectFit: "cover",
                  }}
                >
                  <div className="ps-3 pt-5" style={{ color: "#fff" , textAlign:"start" }}>
                    {data.text_1}
                  </div>
                </div>
                <div
                  className=" text-center mb-5 py-3"
                  style={{ backgroundColor: "#1E8972" }}
                >
                  {" "}
                  {data.name_1}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <Link to={link2}>
              <div className="preserCard">
                <div
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${data.img_src2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "object-fit",
                    height: "300px",
                    objectFit: "cover",
                  }}
                >
                  <div className="ps-3 pt-5" style={{ color: "#fff",textAlign:"start" }}>
                    {data.text_2}
                  </div>
                </div>
                <div
                  className=" text-center mb-5 py-3"
                  style={{ backgroundColor: "#1E8972" }}
                >
                  {" "}
                  {data.name_2}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <Link to={link3}>
              <div className="preserCard">
                <div
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${data.img_src3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "object-fit",
                    height: "300px",
                    objectFit: "cover",
                  }}
                >
                  <div className="ps-3 pt-5" style={{ color: "#fff",textAlign:"start" }}>
                    {data.text_3}
                  </div>
                </div>
                <div
                  className=" text-center mb-5 py-3"
                  style={{ backgroundColor: "#1E8972" }}
                >
                  {" "}
                  {data.name_3}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MistCoreCards;
