import React from 'react'
import { motion } from 'framer-motion'
import '../../src/index.css'
import '../components/ContactMeMain.css'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';

function ContactMeMain() {

  return (

    <motion.section
      initial={{ opacity: 0, y: 175 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }} 
      transition={{easeIn: 5, duration: 1,}} className='contact-me__section'>

      <div className='contact-me-main__container'>

        <div className='contact-me-primary__container'>
            <p className='contact-me__subtitle'>Fill in below</p>
            <p>I'll try my best to get in touch with you as soon as I can!</p>
            <form action="#" method="POST" className="contact-me__form">
                <label htmlFor="name">Your Name</label>
                <input type="name" className="name" id="name" name="name" placeholder='Enter your Name' autoComplete='yes' required />

                <label htmlFor="email">Your Email Address</label>
                <input type="email" className="email" id="email" name="email" placeholder='Enter your Email' autoComplete='yes' required />

                <label htmlFor="message">Your Message</label>
                <textarea name="message"  className="message" id="message" cols="30" rows="10" placeholder='Enter your Message' ></textarea>

                <button className="btn-contact-me" type="submit">Get in touch<ArrowRightAltIcon/></button>
            </form>
        </div>



        <div className='contact-me-secondary__container'>
            <p className='contact-me__subtitle'>Ways to get in touch</p>

            <div className='contact-me-secondary-email__container'>
                <i className='contact-me-email__title'>Email</i>
                <a className='contact-me__email' href = "mailto: abc@example.com">lewis.lendon@gmail.com</a>
            </div>

            <div className='contact-me-secondary-phone__container'>
                <i className='contact-me-phone__title'>Phone</i>
                <a className='contact-me__phone'  href = "tel: +44 07716 673295">+44 07716 673295</a>
            </div>

            <div className='contact-me-secondary-location__container'>
                <i className='contact-me-location__title'>Based in</i>
                <a className='contact-me__location' href='https://www.google.com/maps/place/Manchester/@53.4722454,-2.2234628,12z/data=!3m1!4b1!4m6!3m5!1s0x487a4d4c5226f5db:0xd9be143804fe6baa!8m2!3d53.4807593!4d-2.2426305!16zL20vMDUyYnc?entry=ttu'>Manchester, England</a>
            </div>

            <ul className='contact-me-socials__container'>
                <p className='contact-me__subtitle'>Social Links</p>
                <a href="https://www.linkedin.com/in/lewis-lendon-1baa01202/" target="_blank" className='contact-me-socials__item'>
                    <LinkedInIcon/> LinkedIn
                </a>
                <a href="https://github.com/LendonDev" target="_blank" className='contact-me-socials__item'>
                    <GitHubIcon/> Github
                </a>
                <a href="https://www.google.co.uk" target="_blank" className='contact-me-socials__item'>
                    <TwitterIcon/> Twitter
                </a>
                <a className='contact-me-socials__item' href = "mailto: abc@example.com">
                    <MailIcon/> Email
                </a>
            </ul>

        </div>


      </div>

    </motion.section>

  )
}

export default ContactMeMain