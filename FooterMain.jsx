import React from 'react'
import { motion } from 'framer-motion'
import '../../src/index.css'
import '../components/FooterMain.css'


function FooterMain() {

  return (

    <motion.section className='about-me__section'>

        <h1 className='footer__credits'>Hopefully you get in touch!</h1>
        <div className='copyright'>Copyright 2024 - Designed & Developed by Lewis Lendon</div>
    </motion.section>

  )
}

export default FooterMain
