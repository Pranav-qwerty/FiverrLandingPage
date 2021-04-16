import React from "react";
import Item from "./Item/Item";
import "./Items.css";

function Items() {
  return (
    <div className="Items">
      <h2>Popular professional services</h2>
      <div class="Items-item">
        <Item
          text1="Unlock growth online"
          text2="SEO"
          imageLocation="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
        />
        <Item
          text1="Color your dreams"
          text2="Illustration"
          imageLocation="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
        />
        <Item
          text1="Go global"
          text2="Translation"
          imageLocation="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
        />
        <Item
          text1="Learn your business"
          text2="Data Entry"
          imageLocation="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
        />
        <Item
          text1="Showcase your story"
          text2="Book cover"
          imageLocation="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
        />
        <Item
          text1="Build your brand"
          text2="Logo design"
          imageLocation="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
        />
      </div>
    </div>
  );
}

export default Items;
