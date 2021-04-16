import React from "react";
import "./FiverrReviews.css";

function FiverrReviews() {
  return (
    <div className="FiverrReviews">
      <div class="FiverrReviews-photo">
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
          alt="Img"
        />
      </div>
      <div class="FiverrReviews-text">
        <div class="FiverrReviews-text-name">
          <h5 class="FiverrReviews-text-who">
            Brighid Gannon (DNP, PMHNP-BC), Co-Founder
          </h5>
          <h6 class="FiverrReviews-text-lavender">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
              alt="Img"
            />
          </h6>
        </div>
        <blockquote class="FiverrReviews-text-review">
          <i>
            "We used Fiverr for SEO, our logo, website, copy, animated videos —
            literally everything. It was like working with a human right next to
            you versus being across the world."
          </i>
        </blockquote>
      </div>
    </div>
  );
}

export default FiverrReviews;
