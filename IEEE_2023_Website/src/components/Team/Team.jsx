import React from "react";
import "./Team.css";
import logo3 from "../../assets/team/Anshul.png";
import logo4 from "../../assets/team/arpit.jpg";
import logo5 from "../../assets/team/ayush.jpg";
import logo6 from "../../assets/team/chirag.jpg";
import logo7 from "../../assets/team/pranav.jpeg";
import logo8 from "../../assets/team/prerna.jpg";
import logo9 from "../../assets/team/shubham.jpg";
// import logo10 from "../../assets/team/sneha.JPG";
import logo1 from "../../assets/team/Vidit.jpeg";
import logo12 from "../../assets/team/Yajur.jpeg";
import logo13 from "../../assets/team/ritik.jpeg";
import logo14 from "../../assets/team/vibhu.jpeg";
// import logo14 from "..//team/";

import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";

import styles from "../../style";

import Honecombcell from "./Honecombcell";

export default function Team() {
  return (
    <div className='team-sec'>
      <h1 className={styles.heading2}>
        TEAM <br className='sm:block hidden' />
      </h1>
      <ul className='honeycomb'>
        <Honecombcell
          img={logo14}
          title='Mentor'
          ln={"https://www.linkedin.com/in/vibhu-badal-gupta/"}
          ig={"https://www.instagram.com/thewittybrown/"}
        />
        <Honecombcell
          img={logo14}
          title='Mentor'
          ln={"https://www.linkedin.com/in/vibhu-badal-gupta/"}
          ig={"https://www.instagram.com/thewittybrown/"}
        />
        {/* <Honecombcell
          img={logo10}
          title='Mentor'
          ig={"https://www.instagram.com/ishnehaaa/"}
          ln={"https://www.linkedin.com/in/pandeysneha/"}
        /> */}
        <Honecombcell
          img={logo7}
          title='Chief Convener'
          ig={"https://www.instagram.com/thepranav.chauhan/"}
          ln={"https://www.linkedin.com/in/pranav-chauhan-217bb11b9/"}
        />
        <Honecombcell
          img={logo13}
          title='Chief Convener'
          ig={"https://www.instagram.com/ritikyadav_675/"}
          ln={"https://www.linkedin.com/in/ritik-yadav-675abc/"}
        />
        <Honecombcell
          img={logo3}
          title='Co-Convener'
          ig={"https://www.instagram.com/wiz_anshul/"}
          ln={"https://www.linkedin.com/in/anshuly777/"}
        />
        <Honecombcell
          img={logo6}
          title='Co-Convener'
          ig={"https://www.instagram.com/chiragjindal9811/"}
          ln={"https://www.linkedin.com/in/chirag-jindal-a11a24205/"}
        />
        <Honecombcell
          img={logo5}
          title='Treasurer'
          ig={"https://www.instagram.com/ayushtenguria/"}
          ln={"https://www.linkedin.com/in/ayush-sharma-800853120/"}
        />
        <Honecombcell
          img={logo3}
          title='PR Head'
          ig={"https://www.instagram.com/wiz_anshul/"}
          ln={"https://www.linkedin.com/in/anshuly777/"}
          // className={"hidden"}
        />
        <Honecombcell
          img={logo8}
          title='EM Head'
          ig={"https://www.instagram.com/_.yd.prerna._/"}
          ln={"https://www.linkedin.com/in/prernayadav488/"}
        />
        <Honecombcell
          img={logo4}
          title='Creative Head'
          ig={""}
          ln={"https://www.linkedin.com/in/arpit-juneja-/"}
        />
        <Honecombcell
          img={logo5}
          title='Tech Head'
          ig={"https://www.instagram.com/ayushtenguria/"}
          ln={"https://www.linkedin.com/in/ayush-sharma-800853120/"}
          // className={"hidden"}
        />
        <Honecombcell
          img={logo1}
          title='General Secretary'
          ig={"https://www.instagram.com/vidit_sinha/"}
          ln={"https://www.linkedin.com/in/vidit-v-1a0ab2205/"}
        />
        <Honecombcell
          img={logo9}
          title='General Secretary'
          ig={""}
          ln={"https://www.linkedin.com/in/arpit-juneja-/"}
        />
        <Honecombcell
          img={logo12}
          title='General Secretary'
          ig={"https://www.instagram.com/yajur_chugh_07/"}
          ln={"https://www.linkedin.com/in/yajur-chugh-5a44a220b/"}
        />

        <li className='honeycomb-cell honeycomb_Hidden'></li>
      </ul>
    </div>
  );
}
