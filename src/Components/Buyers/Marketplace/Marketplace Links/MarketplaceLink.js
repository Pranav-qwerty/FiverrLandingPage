import React from "react";
import "./MarketplaceLink.css";

function MarketplaceLink({ LinkImg, text }) {
  return (
    <div className="MarketplaceLink">
      <div class="LinkIcon">
        <img src={LinkImg} alt="Img" />
        <div class="HoverLoader"></div>
      </div>
      <div class="MarketplaceLink-title">{text}</div>
    </div>
  );
}

export default MarketplaceLink;
