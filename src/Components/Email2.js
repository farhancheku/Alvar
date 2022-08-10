import React, { useState } from "react";

const Email2 = () => {
  const [data, setData] = useState([{}]);
  const validate = () => {};
  return (
    <>
      <div id="mc_embed_signup">
        <form
          action="https://d-tech.us2.list-manage.com/subscribe/post?u=4a7612cfbd6619ec8646d780a&amp;id=12c850e223"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <h2></h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label for="mce-FNAME">
                First Name <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                value={data}
                name="FNAME"
                className="required"
                id="mce-FNAME"
              />
            </div>
            <div className="mc-field-group">
              <label for="mce-LNAME">
                Last Name <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="LNAME"
                className="required"
                id="mce-LNAME"
              />
            </div>
            <div className="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div className="mc-field-group size1of2">
              <label for="mce-COMPANY">Company name </label>
              <input
                type="text"
                name="COMPANY"
                className=""
                value=""
                id="mce-COMPANY"
              />
            </div>
            <div
              id="mergeRow-gdpr"
              className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
            >
              <div className="content__gdpr">
                <label>Marketing Permissions</label>
                <p>
                  Please, indicate your agreement to be contacted by ALVAR
                  through the following channels:
                </p>
                <fieldset
                  className="mc_fieldset gdprRequired mc-field-group"
                  name="interestgroup_field"
                >
                  <label className="checkbox subfield" for="gdpr_24585">
                    <input
                      type="checkbox"
                      id="gdpr_24585"
                      name="gdpr[24585]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>Email</span>{" "}
                  </label>
                  <label className="checkbox subfield" for="gdpr_24593">
                    <input
                      type="checkbox"
                      id="gdpr_24593"
                      name="gdpr[24593]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>Customized Online Advertising</span>{" "}
                  </label>
                </fieldset>
                <p>
                  You can unsubscribe at any time by clicking the link in the
                  footer of our emails. For information about our privacy
                  practices, please visit our website.
                </p>
              </div>
              <div className="content__gdprLegal">
                <p>
                  By clicking below to subscribe, you acknowledge that your
                  information will be transferred for processing.{" "}
                  <a href="https://mailchimp.com/legal/terms" target="_blank">
                    Learn more about Mailchimp's privacy practices here.
                  </a>
                </p>
              </div>
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute; left: -5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_4a7612cfbd6619ec8646d780a_12c850e223"
                tabindex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Email2;
