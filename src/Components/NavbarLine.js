import React from "react";

const NavbarLine = ({ lineColor, display }) => {
  return (
    <>
      <div className="line-below-navbar" style={{ display: display }}>
        <div
          className="position-fixed"
          style={{
            // marginBottom: "100px",
            top: "5%",

            zIndex: "107",
            width: "100%",
            height: "70px",
            backgroundColor: lineColor,
          }}
        ></div>
      </div>
    </>
  );
};

export default NavbarLine;
