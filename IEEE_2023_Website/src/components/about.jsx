
import './stylescss/about.css'
function About() {
  return (
    <section className="about" id="about">
      <h1>ABOUT IEEE NSUT SB</h1>
      <div className="main">
        <img src={vectorabout} />
        <div className="about-text">
          {/* <h1>ABOUT</h1> */}
          <div className='head-bt'>An</div>
          <div className='head-bt'>Experienced</div>
          <div className='head-bt'>Student Branch</div>
          {/* <div className='head-bt'>Branch</div> */}
          <h3 className="aboutText2"><b>Provides diverse opportunities</b></h3>
          <p className="about-text-p">Our foremost objective is to create an environment which promotes students to learn technical knowledge, inculcate managerial skills and develop their overall personalities.
          </p>
          <button className="about-us">ABOUT US</button>
        </div>
      </div>

    </section>
  )
}

export default About