import React from 'react';
import { motion } from 'framer-motion';

import Logo from '../../src/assets/logo01.png'

const loaderVariants = {

    animationOne: {
        rotate: [ 0, 360],
        opacity: [0],
        display: 'none',

        transition: {
            duration: 1,
            opacity: 0,
        },

        transitionEnd: { 
            display: 'none',
        },
    },

    animationTwo: {
        x: [ "-100%"],
        transition: {
            delay: 2,
            duration: 1.25,
          }
    },

    animationThree: {
        x: ["100%"],
        transition: {
            delay: 2,
            duration: 1.25,
          }
    },

}



const Loader = () => {

    window.addEventListener("load", function() {
        console.log("hes")
    });

    return (
        <>

        

        <motion.div className='loader'
            variants={loaderVariants}
            animate="animationOne"
        >
            <img src={Logo} width="200"alt="Logo"/>
        </motion.div>

        <motion.div className='slide__one'
            variants={loaderVariants}
            animate="animationTwo"
        >

        </motion.div>

        <motion.div className='slide__two'
            variants={loaderVariants}
            animate="animationThree"
        >

        </motion.div>

        </>
    )
}

export default Loader;