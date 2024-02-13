import React from 'react';
import "./About.css";
import image from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={image} alt="" className='about__img' />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Abhinav Kumar Singh, web developer. I have rich experince in web site building.</p>
            <a href="" className="btn">Download Resume</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development">

                </span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage css">

                </span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage javascript">

                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox/>
      
    </section>
  )
}

export default About
