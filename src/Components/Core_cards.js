import React from "react";
import img3 from "../Assets/SeaFood/h_10.png";
import img1 from "../Assets/images/corecard1.png";
import img2 from "../Assets/images/corecard2.png";
import { Link } from "react-router-dom";

const Core_cards = ({ data, industry, link1, link2, link3, link4 }) => {
  console.log(data.img_src1);
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row mb-3" style={{ borderBottom: "2px solid gray " }}>
          <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center">
            <div
              className="fw-bold  d-flex justify-content-center mt-5 pt-5"
              style={{ fontSize: "1.6rem", color: "#000"}}
            >
              Our Solutions
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-12 ">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 ">
                <Link to={link1}>
                  <div className="">
                    <div
                      style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${data.img_src1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "object-fit",
                        height: "240px",
                        objectFit: "cover",
                      }}
                    >
                      <div className="ps-3 pt-3 px-4" style={{ color: "#fff" }}>
                        {data.text_1}
                      </div>
                    </div>
                    <div
                      className=" text-center mb-5 py-3"
                      style={{ backgroundColor: "#1E8972", color: "#fff" }}
                    >
                      {" "}
                      {data.name_1}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <Link to={link2}>
                  <div className="">
                    <div
                      style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${data.img_src2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "object-fit",
                        height: "240px",
                        objectFit: "cover",
                      }}
                    >
                      <div
                        className="ps-3  pt-3 px-4"
                        style={{ color: "#fff", color: "#fff" }}
                      >
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
                  <div className="">
                    <div
                      style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${data.img_src3})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "object-fit",
                        height: "240px",
                        objectFit: "cover",
                      }}
                    >
                      <div
                        className="ps-3  pt-3 px-4"
                        style={{ color: "#fff" }}
                      >
                        {data.text_3}
                      </div>
                    </div>
                    <div
                      className=" text-center mb-5 py-3"
                      style={{ backgroundColor: "#1E8972", color: "#fff" }}
                    >
                      {" "}
                      {data.name_3}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <Link to={link4}>
                  <div className="">
                    <div
                      style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${data.img_src3})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "object-fit",
                        height: "240px",
                        objectFit: "cover",
                      }}
                    >
                      <div
                        className="ps-3  pt-3 px-4"
                        style={{ color: "#fff", color: "#fff" }}
                      >
                        {data.text_4}
                      </div>
                    </div>
                    <div
                      className=" text-center mb-5 py-3"
                      style={{ backgroundColor: "#1E8972" }}
                    >
                      {" "}
                      {data.name_4}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Core_cards;
