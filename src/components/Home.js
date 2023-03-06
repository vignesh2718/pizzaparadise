import React from "react";
import { Link, Route } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion.cjs";
import Image from "../images/pizza.png";
// import sparks from "../images/urban-stars-2.gif";
// import Loader from "./loader";
const Home = () => {
  return (
    <>
      <div className="icons">
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
            rotate: -20,
          }}
          transition={{
            delay: 0.7,
            type: "spring",
            stiffness: 90,
          }}
          src={Image}
          alt=""
          className="home-img"
          
        />
        <motion.img
          drag
          dragConstraints={{ left: 50, top: 0, right: 0, bottom: 50 }}
          //  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.8}
          whileTap={{ cursor: "grabbing" }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            rotate: 20,
          }}
          transition={{
            delay: 0.7,
            type: "spring",
            stiffness: 90,
          }}
          src="https://www.createxp.in/_next/static/media/stickerWow.51df06ec.svg"
          alt=""
          className="rainbow"
        />
      </div>
      

      <motion.div className="home container">
        <motion.h2
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
          Welcome to <span>Pizza Paradise</span>
        </motion.h2>

        <Link to="/base">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
              type: "spring",
            }}
          >
            Create Your Pizza
          </motion.button>
        </Link>
        {/* <Loader/> */}
      </motion.div>
    </>
  );
};

export default Home;
