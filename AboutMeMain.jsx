import React from 'react'
import { motion } from 'framer-motion'
import '../../src/index.css'
import '../components/AboutMeMain.css'


function AboutMeMain() {

  return (

    <motion.section
    initial={{ opacity: 0, y: 175 }}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once: true }} 
    transition={{easeIn: 5, duration: 1,}} className='about-me__section'>

      <div className='about-me-main__container'>

        <div className='about-me-primary__container'>
          <p className='about-me__subtitle'>Who am I?</p>
          <p>A self taught designer & developer, wanting to innovate the user experience with efficient code. I am super passionate about I.T and cannot
          wait to get in a role I’ll enjoy performing and can only improve upon everyday.</p>
        </div>

        <div className='about-me-secondary__container'>
          <p className='about-me__subtitle'>My Skills</p>

          <div className='about-me-skills-list__container'>

            <ul className='about-me-skills__list'>
              <li className='about-me-skills-list__item'>Computer Technician/Hardware Assembly</li>
              <li className='about-me-skills-list__item'>Software Installation & Configuration</li>
              <li className='about-me-skills-list__item'>Photoshop & Figma Design Experience</li>
              <li className='about-me-skills-list__item'>3D Modelling Experience</li>
              <li className='about-me-skills-list__item'>Web Development Experience</li>
            </ul>

            <p className='about-me__subtitle'>Additional Skills</p>

            <ul className='about-me-skills__list'>
              <li className='about-me-skills-list__item'>HTML</li>
              <li className='about-me-skills-list__item'>CSS</li>
              <li className='about-me-skills-list__item'>JS</li>
              <li className='about-me-skills-list__item'>React.js</li>
              <li className='about-me-skills-list__item'>MUI Icons & UI</li>
            </ul>


            <p className='about-me__subtitle'>What I want to learn</p>

            <ul className='about-me-skills__list'>
              <li className='about-me-skills-list__item'>Complete JS Mastery</li>
              <li className='about-me-skills-list__item'>Database Experience</li>
              <li className='about-me-skills-list__item'>Data Management & Handling</li>
              <li className='about-me-skills-list__item'>Server Maintenance</li>
              <li className='about-me-skills-list__item'>Complete Network Setting up</li>
            </ul>

          </div>

        </div>
      </div>

    </motion.section>

  )
}

export default AboutMeMain
