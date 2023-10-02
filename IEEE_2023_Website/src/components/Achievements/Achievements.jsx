import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "../../style";
// import img5 from "../assets/logo.png";
import img5 from "../../assets/logo.png";

import AnimatedCard from "./AnimatedCard";
import FeedbackCard from "../FeedbackCard";

const Achievements = () => {
  return (
    <section>
      <HorizontalScrollCarousel />
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} id='achievements' className='relative h-[300vh]'>
      <h2 className={styles.heading2}>
        ACHIEVEMENTS <br className='sm:block hidden' />
      </h2>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <div className='h-auto px-4 py-12  rounded-3xl flex flex-col justify-center'>
          <motion.div style={{ x }} className='flex gap-20'>
            {cards.map((card) => {
              // return <Card card={card} key={card.id} />;
              return (
                <FeedbackCard
                  key={card.id}
                  img={img5}
                  name='Name'
                  title='Title'
                  content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.'
                />
              );
              // return <AnimatedCard key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'
    >
      <div
        style={{
          backgroundImage: `url(${img5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute inset-0 z-10 grid place-content-center'>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Achievements;

const cards = [
  {
    url: "img1",
    title: "Title 1",
    id: 1,
  },
  {
    url: "img2",
    title: "Title 2",
    id: 2,
  },
  {
    url: "img3",
    title: "Title 3",
    id: 3,
  },
  {
    url: "img4",
    title: "Title 4",
    id: 4,
  },
];
