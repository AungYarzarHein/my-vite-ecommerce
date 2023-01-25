import { motion } from 'framer-motion';
import React from 'react';
import "./intro.css";
import introImg from "../../assets/onlineSale.svg";

const Intro = () => {
  return (
    <div className="introContainer">
        <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:1,delay:.5}}
        className="introHeader">
            <span className="introHeaderOne">Welcome</span>
            <span className="introHeaderTwo">To</span>
            <span className="introHeaderThree">Our</span>
            <span className="introHeaderFour">Best</span>
            <span className="introHeaderFive">Sales</span>
        </motion.div>

        <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:1.5,delay:1}}
        className="introImg"
        >
         <img src={introImg} className="introImgImage" />
        </motion.div>
        
        <motion.div 
        whileInView={{x:[100,0],opacity:[0,1]}}
        transition={{duration:1,delay:.5}}
        className="btns"
        >
          <span className="btnTran">Check Discount</span>
          <span className="btn">Order Now</span>
        </motion.div>

    </div>
  )
}

export default Intro