import React from "react";
import "./Team.css";
import styles from "../../style";
import ashish from "./img/ashish.jpg";
import abhimanyu from "./img/abhimanyu.jpg";
import aditi from "./img/aditi.jpg";
import aditya from "./img/aditya.jpg";
import agam from "./img/agam.jpg";
import agastya from "./img/agastya.jpg";
import ansh from "./img/ansh.jpg";
import ankur from "./img/ankur.jpg";
import arshita from "./img/arshita.jpg";
import ayush from "./img/ayush.jpg";
import ayushatey from "./img/ayushatey.jpg";
import ayushman from "./img/ayushman.jpg";
import dev from "./img/dev.png";
import gaurav from "./img/gaurav.jpeg";
import karan from "./img/karan.jpg";
import kunal from "./img/kunal.jpg";
import parth from "./img/parth.jpg";
import raman from "./img/raman.jpg";
import ravi from "./img/ravi.jpeg";
import rishabh from "./img/rishabh.jpg";
import sahil from "./img/sahil.jpg";
import sarli from "./img/sarli.jpg";
import sharil from "./img/sharil.jpeg";
import swati from "./img/swati.jpg";
import tarun from "./img/tarun.jpg";
import utkarsh from "./img/utkarsh.jpg";
import vaishnavi from "./img/vaishnavi.png";
import venus from "./img/venus.jpg";
import yashesh from "./img/yashesh.jpg";
import yogya from "./img/yogya.jpg";

import Honecombcell from "./Honecombcell";

const teamdata = [
  {
    id: 1,
    img: tarun,
    title: "Chairperson",
    ln: "https://www.linkedin.com/in/tarun-kumar-sharma-7132a122b/",
    ig: "https://www.instagram.com/_imxeno.24_/",
  },
  {
    id: 2,
    img: abhimanyu,
    title: "Vice-Chairperson",
    ln: "https://www.linkedin.com/in/abhimanyuvermaa/",
    ig: "https://www.instagram.com/abhimanyuvermas/",
  },
  {
    id: 3,
    img: yashesh,
    title: "Vice-Chairperson",
    ln: "https://www.linkedin.com/in/yasheshpratapsingh/",
    ig: "https://www.instagram.com/yashesh_25/",
  },
  {
    id: 4,
    img: gaurav,
    title: "Vice-Chairperson",
    ln: "https://www.linkedin.com/in/gaurav-kumar-ba3220229/",
    ig: "https://www.instagram.com/kadian_gaurav10/ ",
  },
  {
    id: 5,
    img: aditi,
    title: "General Secratary",
    ln: "https://www.linkedin.com/in/aditi-sah-611a24242/",
    ig: "https://www.instagram.com/__aditiii__s/",
  },
  {
    id: 6,
    img: ansh,
    title: "General Secratary",
    ln: "https://www.linkedin.com/in/ansharora27/",
    ig: "https://www.instagram.com/arora_ansh27/",
  },
  {
    id: 7,
    img: agastya,
    title: "General Secratary",
    ln: "https://www.linkedin.com/in/agastya-j-41a3a3211/",
    ig: "https://www.instagram.com/a_gastavo/",
  },
  {
    id: 8,
    img: yogya,
    title: "General Secratary",
    ln: "https://www.linkedin.com/in/yogya-aggarwal-62134b224/",
    ig: "https://www.instagram.com/being.bhavuk/",
  },
  {
    id: 9,
    img: venus,
    title: "General Secratary",
    ln: "https://www.linkedin.com/in/venus-dharmik-5811291a3/",
    ig: "https://www.instagram.com/venusdharmik23/",
  },
  {
    id: 10,
    img: sahil,
    title: "General Secratary",
    ln: "https://www.linkedin.com/in/mohd-sahil-813863185/",
    ig: "https://www.instagram.com/silliy_sherlock/",
  },
  {
    id: 11,
    img: sharil,
    title: "CS Chairperson",
    ln: "https://www.linkedin.com/in/sharilmalik9/?originalSubdomain=in",
    ig: "https://www.instagram.com/sharil.malik/",
  },

  {
    id: 12,
    img: raman,
    title: "CS Vice-Chairperson",
    ln: "https://www.linkedin.com/in/raman-chhabra-8ba0121b6/",
    ig: "https://www.instagram.com/whosramanchhabra/",
  },
  {
    id: 13,
    img: arshita,
    title: "WIE Chairperson",
    ln: "",
    ig: "https://www.instagram.com/arshitaguptaa/",
  },
  {
    id: 14,
    img: vaishnavi,
    title: "WIE Vice-Chairperson",
    ln: "",
    ig: "https://www.instagram.com/i.m.vaishnavi_/",
  },
  {
    id: 15,
    img: ayushman,
    title: "RAS Chairperson",
    ln: "",
    ig: "",
  },
  {
    id: 16,
    img: parth,
    title: "RAS Vice-Chairperson",
    ln: "",
    ig: "https://www.instagram.com/p.a.r.t.h1712/",
  },
  {
    id: 17,
    img: ravi,
    title: "CAS Chairperson",
    ln: "",
    ig: "https://www.instagram.com/why_notravii__/",
  },
  {
    id: 18,
    img: ankur,
    title: "CAS Vice-Chairperson",
    ln: "",
    ig: "https://www.instagram.com/ankur.agarwal.07/",
  },
  {
    id: 19,
    img: ashish,
    title: "PES Chairperson",
    ln: "",
    ig: "https://www.instagram.com/ash_ish_l/",
  },
  {
    id: 20,
    img: karan,
    title: "PES Vice-Chairperson",
    ln: "",
    ig: "https://www.instagram.com/karan_14.04/",
  },
  {
    id: 21,
    img: ayush,
    title: "Creative Head",
    ln: "",
    ig: "https://www.instagram.com/ayushpranav1/",
  },
  {
    id: 22,
    img: aditya,
    title: "External Affairs Head",
    ln: "",
    ig: "https://www.instagram.com/adityabohra_10/",
  },
  {
    id: 23,
    img: sarli,
    title: "External Affairs Head",
    ln: "",
    ig: "https://www.instagram.com/ss_14723617/",
  },
  {
    id: 24,
    img: swati,
    title: "Tech Head",
    ln: "https://www.linkedin.com/in/swati-sharma-29a3b022a/",
    ig: "https://www.instagram.com/swati.sharma0202/",
  },
  {
    id: 25,
    img: utkarsh,
    title: "Tech Head",
    ln: "https://www.linkedin.com/in/utkarsh-shrivastava-a2b989225/",
    ig: "https://www.instagram.com/utkrsh.1203/",
  },
  {
    id: 26,
    img: dev,
    title: "Design Head",
    ln: "",
    ig: "https://www.instagram.com/d3v_pand3y/",
  },
  {
    id: 27,
    img: kunal,
    title: "Logistics Head",
    ln: "",
    ig: "https://www.instagram.com/_.kunal._.06/",
  },
  {
    id: 29,
    img: agam,
    title: "Senior Execomm",
    ln: "",
    ig: "https://www.instagram.com/graphicsandserenity/",
  },
  {
    id: 30,
    img: ayushatey,
    title: "Senior Execomm",
    ln: "",
    ig: "https://www.instagram.com/aristematic/",
  },
];

export default function Team() {
  return (
    <div className='team-sec' id='team'>
      <h1 className={styles.heading2}>
        TEAM <br className='sm:block hidden' />
      </h1>
      <ul className='honeycomb'>
        {teamdata.map((data) => (
          <Honecombcell
            key={data.id}
            img={data.img}
            title={data.title}
            ln={data.ln}
            ig={data.ig}
          />
        ))}
        {/* <Honecombcell />; */}
        {/* <Honecombcell
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
        /> */}
        <li className='honeycomb-cell honeycomb_Hidden'></li>
      </ul>
    </div>
  );
}
