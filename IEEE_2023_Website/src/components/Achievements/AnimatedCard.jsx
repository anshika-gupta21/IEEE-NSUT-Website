import React from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import img5 from "../../assets/logo.png";

const AnimatedCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotatey = useTransform(y, [-100, 100], [-30, 30]);
  return (
    <div class='w-[350px] mx-2 rounded-2xl overflow-hidden bg-zinc-700 shadow-2xl py-2'>
      <img class='w-2/3 m-auto' src={img5} alt='Sunset in the mountains' />
      <div class='px-6 py-4'>
        <div class='font-bold text-xl mb-2'>The Coldest Sunset</div>
        <p class='text-white text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};

export default AnimatedCard;
