import "../stylescss/about.css";
import styles from "../../style";
import Lottie from "lottie-react";
import aboutanime from "../awards/assets/gifs/about.json";
import Button from "../Button";

function About() {
  return (
    <section className='about' id='about'>
      {/* <h1>ABOUT IEEE NSUT SB</h1> */}
      <h2 className={styles.heading2}>
        ABOUT US
        <br className='sm:block hidden' />
      </h2>
      <div className='main'>
        {/* <img src={vectorabout} /> */}
        <div className='about-text'>
          {/* <h1>ABOUT</h1> */}
          <div className='head-bt'>An</div>
          <div className='head-bt'>Experienced</div>
          <div className='head-bt'>Student Branch</div>
          {/* <div className='head-bt'>Branch</div> */}
          <h3 className='aboutText2'>
            <b>Provides diverse opportunities</b>
          </h3>
          <p className='about-text-p'>
            Our foremost objective is to create an environment which promotes
            students to learn technical knowledge, inculcate managerial skills
            and develop their overall personalities.
          </p>
          <Button text='Know More' />
          {/* <button className='about-us'>ABOUT US</button> */}
        </div>
        <div className='home_right_sec'>
          <Lottie
            animationData={aboutanime}
            loop={true}
            className='home_anime hidden md:block'
          />
          ;
        </div>
      </div>
    </section>
  );
}

export default About;
