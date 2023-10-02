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
  Achievements,
  Team,
  Gallery,
} from "./components";
import Contact from "./components/contact";
import Carousel from "./components/carousel";
import About from "./components/About/about";

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

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Fade bottom>
            <About />
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
            <Team />
          </Fade>
          <Fade bottom>
            <CTA />
          </Fade>
          <Contact />
          <Fade bottom>
            <Footer />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default App;
