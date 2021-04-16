import React from "react";
import "./Item.css";

function Item({ text1, text2, imageLocation }) {
  return (
    <div
      className="Item"
      style={{
        background: `url(${imageLocation})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="item-text">
        <p className="item-text1">{text1}</p>
        <p className="item-text2">{text2}</p>
      </div>
    </div>
  );
}

export default Item;
