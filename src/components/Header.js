import React from 'react';
import {motion} from "framer-motion";

const svgVariants = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1
    },
  }
}

const pathVariables={
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut"
    }
  }
}
const Header = () => {
 
  return (
    <header>
      
      <motion.div className="logo"
        // initial={{x: -250}}
        // animate={{
        //   x: -10,
        // }}
        // transition={{
        //   delay: 0.3,
        //   type: 'spring',
        //   stiffness: 120,
        // }}
      >
        <motion.svg className="pizza-svg" variants={svgVariants}  initial="hidden"
            animate="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariables}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            fill="none"
            variants={pathVariables}
            initial="hidden"
            animate="visible"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div className="title" 
        initial={{y:-200}}
        animate={{
          y: -10,
        }}
        transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 120,
        }}

   >
        <a href='./home' >
          <h1>Pizza Paradise</h1>
        </a>
      </motion.div>
    </header>
  )
}

export default Header;