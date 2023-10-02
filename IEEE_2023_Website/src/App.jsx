//This is the Official IEEE Website for the year 2023
import React, { useState } from "react";

import styles from "./style";
import Fade from "react-reveal/Fade";
import {
  WhyIEEE,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Chapters,
  PastEvents,
<<<<<<< Updated upstream
  Achievements,
=======

>>>>>>> Stashed changes
} from "./components";
import Contact from "./components/contact";
import Carousel from "./components/carousel";


const App = () => {
  return (
    <div className='bg-primary w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

<<<<<<< Updated upstream
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Fade bottom>
            <Stats />
          </Fade>
          <Fade bottom>
            <WhyIEEE />
          </Fade>
          <Fade bottom>
            <Testimonials />
          </Fade>
          {/* <PastEvents /> */}
          {/* <Fade bottom>
            <Clients />
          </Fade> */}
          <Fade bottom>
            <Achievements />
          </Fade>
          <Fade bottom>
            <Chapters />
          </Fade>
          <Fade bottom>
            <CTA />
          </Fade>
          <Fade bottom>
            <Footer />
          </Fade>
        </div>
=======
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      
        <Stats />
  
        <Business />
        <Testimonials />
        <PastEvents />
   
       
        <Clients />
        <Carousel/>
        <Chapters />
       
        <CTA />
        <Contact/>
        <Footer />
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default App;
