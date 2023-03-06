import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion.cjs";
// import sparks from "../images/urban-stars-2.gif";
import star from "../images/buddy-stars.gif";


const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <div className="base container">
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
          rotate: 10,
        }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 90,
        }}
        src="https://www.createxp.in/_next/static/media/stickerFire.8dbeb693.svg"
        alt="fire"
        className="fire"
      />
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
        }}
      >
        Step 1: Choose Your Base
      </motion.h3>
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
        }}
      >
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover= {{scale:1.2,originX:0} }>
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </motion.ul>
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
          rotate: -10,
        }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 90,
        }}
        src="https://www.createxp.in/_next/static/media/stickerFire.8dbeb693.svg"
        alt="fire"
        className="fires"
      />
      <motion.img
      
      initial={{ opacity: 0 }}

      animate={{
        opacity: 1,
        rotate: 50,
      }}
      transition={{
        delay: 0.8,
        type: "spring",
        stiffness: 90,
      }}
      src={star}
      alt="fire"
      className="spark" />
      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button 
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
              type: "spring",
            }}>Next</motion.button>
          </Link>
          
        </div>
      )}
    </div>
  );
};

export default Base;
