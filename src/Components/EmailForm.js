import React, { useEffect, useState } from "react";

const EmailForm = ({category}) => {

  const [checkenquiry, setcheckEnquiry] = useState(false);
  const [checksupport, setcheckSupport] = useState(false);
  const [checkexpo, setcheckexpo] = useState(false);

  useEffect(() => {
    if (category === "support"){
      setcheckSupport(true)
    }
    else if (category === "enquiry"  || category === "mistpage"){
      setcheckEnquiry(true)
    }
    else if (category === "expo"){
      setcheckexpo(true)
    }
  }, [])
  
  


  return (
    <>
    {checkenquiry && <div class="mx-auto d-flex justify-content-center mb-5 pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/c53lqOtiBmoXuSg8FRqAI9Pps9Tyy7tkJvjWJm3ZUdtLl4DhQfFtpILs2OpOzLy87x"></div>}
    {checksupport && <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/czLRztRRrLbWRlKkyvCzxn6kZVqv0Pl8aKFB18qiIFTnYFz4OpS2vUkNKcAfM2VBbt"></div>}
    {checkexpo && <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/6UN8fNyH5OEdA8tMe81zDaEmhZk4U15UTWGDmqRSBe0VlDbbSHfWlywmx27epC8mFJ"></div>}
    </>
    



    // <>
    //   <div className="mx-auto d-flex justify-content-center mb-5">
    //     <form
    //       className="bg-light mx-auto  p-5 rounded email-width"
    //       style={{ maxWidth: "500px", width: "100%", border: "2px solid #111" }}
    //     >
    //       <div class="mb-3">
    //         <label for="exampleFormControlInput1" class="form-label">
    //           Name
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleFormControlInput1"
    //         />
    //       </div>
    //       <div class="mb-3">
    //         <label for="exampleFormControlInput1" class="form-label">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleFormControlInput1"
    //           placeholder="name@example.com"
    //         />
    //       </div>
    //       <div class="mb-3">
    //         <label for="exampleFormControlInput1" class="form-label">
    //           Phone (Optional)
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleFormControlInput1"
    //           placeholder="+1 122345434"
    //         />
    //       </div>
    //       <div class="mb-3">
    //         <label for="exampleFormControlInput1" class="form-label">
    //           Company Name
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleFormControlInput1"
    //         />
    //       </div>
    //       <div class="mb-3">
    //         <label for="exampleFormControlInput1" class="form-label">
    //           Country
    //         </label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           id="exampleFormControlInput1"
    //         />
    //       </div>
    //       <div class="mb-3">
    //         <label for="exampleFormControlTextarea1" class="form-label">
    //           Your Message (Optional)
    //         </label>
    //         <textarea
    //           class="form-control"
    //           id="exampleFormControlTextarea1"
    //           rows="3"
    //         ></textarea>
    //       </div>
    //       <div className="w-100">
    //         <button className=" btn btn-primary ">Submit</button>
    //       </div>
    //     </form>
    //   </div>
    // </>
  );
};

export default EmailForm;
