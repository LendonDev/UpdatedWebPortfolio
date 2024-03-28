import React from 'react'
import {useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'

import '../../src/index.css'
import '../components/NavbarMain.css'
import Logo from '../assets/logo01.png'
import England from '../assets/England.png'

import MenuIcon from '@mui/icons-material/Menu';
import CottageIcon from '@mui/icons-material/Cottage';
import SegmentIcon from '@mui/icons-material/Segment';
import AppsIcon from '@mui/icons-material/Apps';
import MailIcon from '@mui/icons-material/Mail';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function NavbarMain() {

  const [isActive, setActive] = useState("false");

  function handleClick(){

    if (isActive == false) {
      setActive (isActive => !isActive);
      setActive (isActive => true)
    }
    else
      setActive (isActive => !isActive);
  }

  let setActiveCheck = !isActive;

  if (isActive == false) {
    document.body.style.overflowY = "hidden";
  }
  else {
    document.body.style.overflowY = "visible";
  }

  return (
        
        <section className='navbar__section'>

          <div className='navbar-main__container'>
            <div className='navbar-main-primary__container'>
              <div className='navbar-menu-btn__container'>
                <button onClick={handleClick} className={`menu-btn${setActiveCheck ? ' active' : ''}`}>
                  <MenuIcon/>
                </button>
              </div>
              <div onClick={handleClick} className={`navbar-main-side-menu__backdrop${setActiveCheck ? ' active' : ''}`}/>
              <div className={`navbar-main-side-menu__container${setActiveCheck ? ' active' : ''}`}>
                <ul className='navbar-main-side-menu__list'>
                  <span className='navbar-main-side-menu__subtitle'>Menu</span>

                  <a href="#hero" onClick={handleClick} className='navbar-main-side-menu-list-item__container'>
                    <div className='navbar-main-side-menu-list-item__icon'>
                      <CottageIcon/>
                    </div>
                    <div className='navbar-main-side-menu-list-item-content__container'>
                      <p className='side-menu__title'>Home</p>
                      <i>Where it all begins.</i>
                    </div>
                  </a>

                  <a href="#aboutme" onClick={handleClick} className='navbar-main-side-menu-list-item__container'>
                    <div className='navbar-main-side-menu-list-item__icon'>
                      <SegmentIcon/>
                    </div>
                    <div className='navbar-main-side-menu-list-item-content__container'>
                      <p className='side-menu__title'>About Me</p>
                      <i>Who am I?</i>
                    </div>
                  </a>

                  <a href="#mywork" onClick={handleClick} className='navbar-main-side-menu-list-item__container'>
                    <div className='navbar-main-side-menu-list-item__icon'>
                      <AppsIcon/>
                    </div>
                    <div className='navbar-main-side-menu-list-item-content__container'>
                      <p className='side-menu__title'>Work</p>
                      <i>My personal works.</i>
                    </div>
                  </a>

                  <a href="#contact" onClick={handleClick} className='navbar-main-side-menu-list-item__container'>
                    <div className='navbar-main-side-menu-list-item__icon'>
                      <MailIcon/>
                    </div>
                    <div className='navbar-main-side-menu-list-item-content__container'>
                      <p className='side-menu__title'>Contact</p>
                      <i>Get in touch.</i>
                    </div>
                  </a>

                  <span className='navbar-main-side-menu__subtitle'>Tools</span>


                </ul>
              </div>
            </div>
            <div className='navbar-main-secondary__container'>
              <a href="#hero">
                <div className='navbar-logo__container'>
                  <img src={Logo} width={40}/>
                </div>
              </a>
              </div>
            <div className='navbar-main-tertiary__container'>
              <a href="#contact" className='btn-contact-me__navbar'>Get in touch<ArrowRightAltIcon/></a>
            </div>
          </div>


        </section>

  )
}

export default NavbarMain
