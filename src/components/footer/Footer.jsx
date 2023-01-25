import React from 'react';
import { motion } from 'framer-motion';
import "./footer.css";
import {FaFacebook,FaFacebookMessenger,FaTwitter,FaInstagram,FaLinkedin,FaWhatsapp,FaTelegram} from "react-icons/fa";
import logo from "../../assets/zlanlogo.png";



const Footer = () => {
  return (
    <motion.div 
    whileInView={{opacity:[0,1]}}
    transition={{delay:.5,duration:1.5}}
    className="footerContainer">
        <div className="footerLogo">
            <span className="footerHeader"> Vite Ecommerce </span>
            <img src={logo} className="footerlogoImage" />
            <span className="adOne">Myanmar,Yangon Devision</span>
            <span className="adTwo"> Kamayut Township,U Tun Lin Street </span>
            <span className="adThree"> viteecommerce@gmail.com </span>
        </div>

        <div className="footerInfo">
            <div className="footerInfoSocial">
               <FaFacebook className='socialIcon' />
               <FaFacebookMessenger className='socialIcon' />
               <FaTwitter className='socialIcon' />
               <FaInstagram className='socialIcon' />
               <FaLinkedin className='socialIcon' />
               <FaWhatsapp className='socialIcon' />
               <FaTelegram className='socialIcon' />
            </div>
            
            <div className="smallInfo">
                I am small info
            </div>
            <div className="smallInfo">
                I am small info
            </div>
            
        </div>
    </motion.div>
  )
}

export default Footer