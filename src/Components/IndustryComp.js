import React from "react";

const IndustryComp = ({ IndName, color, CoreName }) => {
  return (
    <>
      <div>
        {" "}
        <div className="container mt-5">
          <div
            className=" col-12 text-center py-1"
            style={{ backgroundColor: color}}
          >
            {IndName} <span style={{ fontSize: "x-large", fontWeight:"600", opacity: "0.6" }}>{CoreName}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryComp;
