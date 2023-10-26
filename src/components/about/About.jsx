import React from 'react'
import './about.css'
import S2 from '../../assets/ceo.jpg'
import Info from './Info'
const About = () => {
  return (
    <div className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={S2} alt="" className='about__img' />

            <div className="about__data">
                <Info />

                <p className="about__description">
                    Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
                    I use skills such as Php, MySql, Javascript, React, Html, Css, Java.
                    I am always happy and ready to bring a project to life
                </p>
            </div>
        </div>
    </div>
  )
}

export default About