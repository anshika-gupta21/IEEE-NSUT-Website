import React from "react";
import "./stylescss/carousel.scss";
import img1 from "./images/images/ieeecas.svg";
import img2 from "./images/images/ieeecs.svg";
import img3 from "./images/images/ieeeras.svg";
import img4 from "./images/images/ieeewie.svg";
function Carousel() {
  return (
    <div>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={img1} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img2} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img3} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img4} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img1} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img2} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img3} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img4} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img1} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img2} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img3} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={img4} height="100" width="250" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
