import React from 'react'
import { motion } from 'framer-motion'

import '../../src/index.css'
import '../components/WorkMain.css'

import AnnouncementIcon from '@mui/icons-material/Announcement';

function WorkMain() {

  return (

    <motion.section
      initial={{ opacity: 0, y: 175 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }} 
      transition={{easeIn: 5, duration: 1,}} className='my-work__section'>

      <div className='my-work-main__container'>

        <div className='my-work-project__container'>
            <div className='my-work-project__image'></div>
            <div className='my-work-project-content__container'>
                <div className='my-work-project__content'>
                    <h2 className='my-work-project__title'>Project</h2>
                    <p className='my-work-project__date'>2024 - Web App</p>
                    <i className='my-work-project__tools'>React.js, Framer</i>
                </div>
                <div className='my-work-project__description'>
                    <i>Details</i>
                    <p>A self taught designer & developer, wanting to innovate. I type random things here to make text bigger.</p>
                </div>
            </div>
        </div>

        <div className='my-work-project__container'>
            <div className='my-work-project__image'></div>
            <div className='my-work-project-content__container'>
                <div className='my-work-project__content'>
                    <h2 className='my-work-project__title'>Project</h2>
                    <p className='my-work-project__date'>2024 - Web App</p>
                    <i className='my-work-project__tools'>React.js, Framer</i>
                </div>
                <div className='my-work-project__description'>
                    <i>Details</i>
                    <p>A self taught designer & developer, wanting to innovate. I type random things here to make text bigger.</p>
                </div>
            </div>
        </div>

        <div className='my-work-project__container'>
            <div className='my-work-project__image'></div>
            <div className='my-work-project-content__container'>
                <div className='my-work-project__content'>
                    <h2 className='my-work-project__title'>Project</h2>
                    <p className='my-work-project__date'>2024 - Web App</p>
                    <i className='my-work-project__tools'>React.js, Framer</i>
                </div>
                <div className='my-work-project__description'>
                    <i>Details</i>
                    <p>A self taught designer & developer, wanting to innovate. I type random things here to make text bigger.</p>
                </div>
            </div>
        </div>

        <div className='my-work-project__container'>
            <div className='my-work-project__image'></div>
            <div className='my-work-project-content__container'>
                <div className='my-work-project__content'>
                    <h2 className='my-work-project__title'>Project</h2>
                    <p className='my-work-project__date'>2024 - Web App</p>
                    <i className='my-work-project__tools'>React.js, Framer</i>
                </div>
                <div className='my-work-project__description'>
                    <i>Details</i>
                    <p>A self taught designer & developer, wanting to innovate. I type random things here to make text bigger.</p>
                </div>
            </div>
        </div>

        <div className='my-work-banner__container'>
                <p className='my-work-banner__title'><AnnouncementIcon/>Not over, many more to come</p>
                <p>It's not over - Many more projects will be added here in the future - hopefully you're one of them!</p>
        </div>


      </div>

    </motion.section>

  )
}

export default WorkMain
