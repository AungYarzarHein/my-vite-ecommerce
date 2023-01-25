
import React from 'react';
import { motion } from 'framer-motion';
import "./sale.css";
import tools from "../../assets/tools.svg";



const ItemCard = () => {
  return(
    <motion.div 
    whileInView={{opacity:[0,1]}}
    transition={{duration:2.5}}
    className="itemCardContainer">
        <img src={tools} className="itemCardImage" />
        <div className="itemCardInfo">
          <span>Price</span>
          <span>450$</span>
        </div>
        <div className="itemCardBtns">
          <span className="itemCardBtn">Order</span>
        </div>
    </motion.div>
  )
}

const Sale = () => {
  return (
    <div className="saleContainer">
      <div className="saleHeader">
        <motion.div 
        whileInView={{y:[-60,0],opacity:[0,1]}}
        transition={{duration:1,delay:.5}}
        className="saleHeaderTitle"
        >
             Hello Friends
        </motion.div>
      </div>
       <ItemCard />
       <ItemCard />
       <ItemCard />
       <ItemCard />
       <ItemCard />
       <ItemCard />
       <ItemCard />
       <ItemCard />
       <ItemCard />
       <ItemCard />
    </div>
  )
}

export default Sale