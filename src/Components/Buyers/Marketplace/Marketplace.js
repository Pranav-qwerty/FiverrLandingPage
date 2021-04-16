import React from "react";
import MarketplaceLink from "./Marketplace Links/MarketplaceLink";
import "./Marketplace.css";

function Marketplace() {
  return (
    <div className="marketplace">
      <h2>Explore the marketplace</h2>
      <div class="marketplace-links">
        <MarketplaceLink
          LinkImg="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
          text="Graphics & Design"
        />
        <MarketplaceLink
          LinkImg="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
          text="Digital Marketing"
        />
        <MarketplaceLink
          LinkImg="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
          text="Writing & Translation"
        />
        <MarketplaceLink
          LinkImg="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
          text="Video & Animation"
        />
        <MarketplaceLink
          LinkImg="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
          text="Music & Audio"
        />
        <MarketplaceLink
          LinkImg="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
          text="Programming & Tech"
        />
        <MarketplaceLink
          LinkImg="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
          text="Business"
        />
        <MarketplaceLink
          LinkImg="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
          text="Lifestyle"
        />
        <MarketplaceLink
          LinkImg="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
          text="Data"
        />
      </div>
    </div>
  );
}

export default Marketplace;
