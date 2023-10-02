//This is the Official IEEE Website for the year 2023
import React from "react";

const Button = ({ styles }) => (
  <button
    type='button'
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    <a href='https://bit.ly/Join_IEEENSUT' target='_blank'>
      Get Started
    </a>
  </button>
);

export default Button;
