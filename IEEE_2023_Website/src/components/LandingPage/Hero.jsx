// import styles from "../style";
import styles from "../../style";
import Lottie from "lottie-react";
// import homeanime from "./awards/assets/gifs/home.json";
import homeanime from "../awards/assets/gifs/home.json";
import "../stylescss/hero.css";
import { discount, robot } from "../../assets";
import GetStarted from "./GetStarted";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Join</span> IEEE{" "}
            <span className='text-white'>NSUT</span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            Welcome to <br className='sm:block hidden' />{" "}
            <div className='home_sec'>
              <Typewriter
                options={{
                  strings: ["IEEE NSUT"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <div className='hidden md:mr-4 md:block mr-0'>
            <a href='https://bit.ly/Join_IEEENSUT' target='_blank'>
              <GetStarted />
            </a>
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
          Official Website
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          IEEE NSUT is one of the most renowned student branches of the IEEE
          architecture due to its well-defined contributions and unique impacts.
        </p>
        <p> </p>
        <p> </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className='home_right_sec'>
          <Lottie
            animationData={homeanime}
            loop={true}
            className='home_anime hidden lg:block md:block'
          />
          ;
        </div>

        {/* gradient start */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
