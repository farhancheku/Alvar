import React from "react";
import Arrow from "../Assets/images/arrowIcon.png";
const Core4Comp = ({ comment1, comment2 }) => {
  return (
    <>
      <div className="pb-2 px-2 ">
        {" "}
        <div className="container " style={{ borderBottom: "3px solid grey" }}>
          <div className="row px-3">
            <div className="col-12 col-lg-4 col-md-4 me-1  p-2">
              <p
                className="fw-bold mt-3"
                style={{ fontSize: "3rem", fontSize: "x-large" }}
              >
                {comment1}
                <img
                  src={Arrow}
                  className="img-fluid"
                  style={{ width: "20px" }}
                />
              </p>
            </div>
            <div className="col-12 col-lg-7 col-md-7  ms-lg-5 ps-3 mt-4 pb-1 ">
              <div className="  d-flex justify-content-center align-items-center me-auto">
                {comment2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Core4Comp;
