import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import '../../index.css'

import Loader from '../../components/Loader'

import NavbarMain from '../../components/NavbarMain'
import HeroMain from '../../components/HeroMain'
import AboutMeMain from '../../components/AboutMeMain'
import WorkMain from '../../components/WorkMain'
import ContactMeMain from '../../components/ContactMeMain'
import FooterMain from '../../components/FooterMain'

function Layout() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    console.log("Site made in React.js - Designed & Developed by Lewis Lendon."),
    <ReactLenis root>
      { /* content */ }
    </ReactLenis>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Layout/>

    <header>
      <NavbarMain/>
    </header>

      <Loader/>


    <main className='main-page'>
      <div className='fix-top'/>
      <a id="hero" className='subtitle'>Welcome Aboard</a>
      <HeroMain/>
      <a id="aboutme"className='subtitle'>About Me</a>
      <AboutMeMain/>
      <a id="mywork"className='subtitle'>My Work</a>
      <WorkMain/>
      <a id="contact"className='subtitle'>Contact Me</a>
      <ContactMeMain/>
    </main>
    <footer className='main-page'>
      <a className='subtitle'>Farewell</a>
      <FooterMain/>
    </footer>
  </React.StrictMode>,
)
