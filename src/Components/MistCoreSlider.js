import React from "react";
import shap from "../Assets/images/shap_1.png";
import MistCarousel from "./MistCarousel";
const MistCoreSlider = ({ comment0, comment1, comment2, imagesprops }) => {
  return (
    <>
      <div className="my-5">
        <div
          className="container pb-3 px-2"
          style={{ borderBottom: "5px solid green" }}
        >
          <div className="row my-4 g-0">
            <div
              className="fw-bold"
              style={{
                fontSize: "x-large",
                textAlign: "center",
              }}
            >
              <h3> {comment0}</h3>
            </div>
          </div>
          <div className="row pt-5 g-0">
            <div className="col-12 col-lg-4">
              <div className="fw-bold">
                {" "}
                <h3>
                  <img src={shap} className="img-fluid" alt="" /> {comment1}
                </h3>
                <div className="ps-2 text-justify my-2">{comment2}</div>
              </div>
            </div>
            <div
              className="col-12  col-lg-6 ms-lg-auto 
            "
            >
              <div className=" ">
                <MistCarousel imagesprops={imagesprops} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MistCoreSlider;
