import React from "react";
import img from "../Assets/SeaFood/n__2.png";
const AboutPanels = () => {
  return (
    <>
      <div>
        <div className="container  my-5">
          <div className="row">
            <div
              className="col-lg-2 col-12 col-md-6 mb-2"
              style={{ backgroundColor: "#295D8A" }}
            >
              <div
                className="fw-bold d-flex justify-content-center flex-column align-items-center aboutpanel-text1 "
                style={{
                  color: "#fff",
                  marginTop: "100px",
                  fontSize: "x-large",
                  fontSize: "2rem",
                }}
              >
                Read about more both c-30 and <br /> c-40
                {/* <img src={img} className="img-fluid" alt="" /> */}
              </div>
              <div className="">
                <a href="#" className="" style={{ color: "#00FFD3" }}>
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-12 col-md-6 about-col2">
              <div style={{ width: "100%", objectFit: "contain" }}>
                <img src={img} className="img-fluid " alt="" />
              </div>
              <div className="aboutpanel-text">
                Both models, ALVAR Mist Core C-30 and ALVAR Mist Core C-40, are tailor-made defensive/offensive systems, automated and connected to the internet, allowing the tracking of the operations.
                Depending on the model and the facilities to be installed in, the system size can vary from 1 to 12 channels, allowing the deployment of the mist effectively through the whole area that needs protection and in 360°.
                Each channel can be programmed to disinfect separated spaces or rooms simultaneously or at different times, depending on the production needs.
                The high-density mist leaves no surface untouched, attacking bacteria in processing machines, conveyor belts and difficult to reach areas in the production line.
                The disinfection process takes place in a short time. 10-30 minutes are usually enough for the whole disinfection cycle.
                ALVAR has been proven to be very efficient combatting numerous known and harmful microbes (bacteria, virus and fungi) found in the food industry, such as Listeria, Salmonella, Escherichia coli, Clostridium, Norovirus and others.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPanels;
