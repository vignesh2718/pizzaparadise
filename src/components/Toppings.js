import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion/dist/framer-motion.cjs";
import top from  "../images/toppings.png";
import cheese from "../images/cheese.png";
import slide from "../images/buddy-lines-26.png";
import sparks from "../images/urban-stars-2.gif";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['Extra cheese', 'onions','Tomato','Chicken '];

  return (
    
    <><div className="toppings container">
      <motion.img
        drag
        dragConstraints={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        dragElastic={0.9}
        whileTap={{ cursor: "grabbing" }}
        initial={{ opacity: 0 }}

        animate={{
          opacity: 1,
          rotate: 360,
        }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 90,
        }}
        src={top}
        alt="fire"
        className="pizza" />
      <motion.h3 
      initial={{ x: -1000 }}
      animate={{
        x: -10,
        from: { opacity: 0 },
        to: { opacity: 1 },
      }}
      transition={{
        delay: 0.3,
        type: "spring",
        stiffness: 90,
      }}>Step 2: Choose Toppings</motion.h3>
      <motion.ul 
      initial={{ x: -1000 }}
      animate={{
        x: -10,
        from: { opacity: 0 },
        to: { opacity: 1 },
      }}
      transition={{
        delay: 0.3,
        type: "spring",
        stiffness: 90,
      }}>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            whileHover= {{scale:1.2,originX:0} }
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </motion.ul>
<motion.img   
initial={{opacity: 0}}
animate={{
          opacity: 1,
          rotate: -30,
        }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 90,
        }}
        src={slide} alt="" className='slide'/>
      <Link to="/order">
        <motion.button 
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
          type: "spring",
        }}>
          Order
        </motion.button>
      </Link>

    </div>
    <motion.img
        // drag
        initial={{ opacity: 0 }}

        animate={{
          opacity: 1,
          rotate: 380,
        }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 90,
        }}
        src={cheese}
        alt="fire"
        className="cheese" />
        <motion.img
      
        initial={{ opacity: 0 }}

        animate={{
          opacity: 1,
          rotate: 20,
        }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 90,
        }}
        src={sparks}
        alt="fire"
        className="sparks" />
        </>
  )
}

export default Toppings;