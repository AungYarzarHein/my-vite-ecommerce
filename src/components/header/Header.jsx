import React from 'react';
import "./header.css";
import zlanlogo from "../../assets/zlanlogo.png";
import { GiMaceHead,GiSalmon,GiGamepad } from "react-icons/gi";


const Header = () => {
  return (
    <div className="appMainHeader">
        <img src={zlanlogo} className="appMainHeaderLogo" />
        <span className="mainTitle"> ZLan Ecommerce </span>
        <div className="menuBtns">
          <span className="menuBtn"> <GiMaceHead className='menuIcon' /> Order</span>
          <span className="menuBtn"><GiSalmon className='menuIcon' />Discount</span>
          <span className="menuBtn"><GiGamepad className='menuIcon' />Your Order</span>
        </div>
    </div>
  )
}

export default Header