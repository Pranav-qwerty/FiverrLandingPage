import React from "react";
import "./WhyFiverr.css";
import WhyFiverrText from "./WhyFiverrText";

function WhyFiverr() {
  return (
    <div className="WhyFiverr">
      <div class="WhyFiverr-text">
        <div class="WhyFiverr-text-heading">
          A whole world of freelance <br /> talent at your fingertips
        </div>
        <ul class="WhyFiverr-text-points">
          <li>
            <WhyFiverrText
              title="The best for every budget"
              paragraph="Find high-quality services at every price point. No hourly rates, just project-based pricing."
            />
          </li>
          <li>
            <WhyFiverrText
              title="Quality work done quickly"
              paragraph="Find the right freelancer to begin working on your project within minutes."
            />
          </li>
          <li>
            <WhyFiverrText
              title="Protected payments, every time"
              paragraph="Always know what you'll pay upfront. Your payment isn't released until you approve the work."
            />
          </li>
          <li>
            <WhyFiverrText
              title="24/7 support"
              paragraph="Questions? Our round-the-clock support team is available to help anytime, anywhere."
            />
          </li>
        </ul>
      </div>
      <div class="WhyFiverr-video">
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
          alt="Fiverr Image"
        />
      </div>
    </div>
  );
}

export default WhyFiverr;
