import React from 'react'
import { motion } from 'framer-motion'

import '../../src/index.css'
import '../components/HeroMain.css'

import Logo from '../assets/logo01.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import England from '../assets/England.png'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function HeroMain() {

  return (

    <motion.section
      initial={{ opacity: 0, y: 175 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }} 
      transition={{easeIn: 5, duration: 1,}} className='hero__section'>

      <div className='hero-main__container'>

        <div className='hero-main-primary__container'>

          <div className='hero-main-title__container'>
            <p>Greetings</p>
            <h1>Hi - I'm Lewis.</h1>
            <p>UI/UX Designer & Developer, and I.T Fanatic.</p>
          </div>

          <div className='hero-text-box__container'>
            <img src={Logo} height="60" alt="Logo"/>
            <p>Born and Raised in Manchester, I'm a guy who seeks exciting opportunities to improve his Knowledge & Skills.</p>
          </div>

        </div>

        <div className='hero-main-secondary__container'>
          <a href="#contact" className='btn-contact-me'>Get in touch<ArrowRightAltIcon/></a>
        </div>

      </div>

      <ul className='hero-statistics__container'>

        <li className='hero-statistics-item__container'>
          <p className='hero-statistics-item__header'>Nationality</p>
          <span className='hero-statistics-item__content'>ENG</span>
          <p className='hero-statistics-item__footer'><img src={England} height={20} alt="Picture of England" /></p>
        </li>

        <li className='hero-statistics-item__container'>
          <p className='hero-statistics-item__header'>Projects</p>
          <span className='hero-statistics-item__content'>20+</span>
          <p className='hero-statistics-item__footer'><AutoAwesomeIcon/></p>
        </li>

        <li className='hero-statistics-item__container'>
          <p className='hero-statistics-item__header'>Experience</p>
          <span className='hero-statistics-item__content'>2+</span>
          <p className='hero-statistics-item__footer'>YRS</p>
        </li>

      </ul> 

    </motion.section>

  )
}

export default HeroMain
