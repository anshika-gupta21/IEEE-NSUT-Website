import React from "react";
import "./Awards.css";
import Awardcar from "./Awardcar";
function Awards() {
  return (
    <div className='awards my-20' id='achievements'>
      <div className='bold_wrap'>
        <div className='award_1'>ACHIEVEMENTS</div>
        <div className='award_2'>Awards</div>
      </div>
      <Awardcar />
    </div>
  );
}

export default Awards;
