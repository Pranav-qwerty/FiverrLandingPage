import React from "react";
import "./Crowsel.css";

function Crowsel() {
  return (
    <div className="Crowsel">
      <div class="crowsel-try">
        <div class="crowsel-try-text">
          <div class="crowsel-try-text1">
            Find The perfect <i>freelance</i>
          </div>
          <div class="crowsel-try-text2">services for your business</div>
        </div>
        <div class="crowsel-try-search">
          <input
            type="text"
            className="crowsel-try-search-input"
            placeholder='Try "building mobile app"'
          />
          <button className="crowsel-try-search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Crowsel;
