import React from "react";
import '../components/mooter.module.css';
import {  NavLink  } from "react-router-dom";
const Footer = () => {

  return (
    <div className={`myFooter`}>
      <footer>
        Designed and developed by <NavLink to='/data'>Amamria ilyess</NavLink>
        <span>🔥</span>
      </footer>
    </div>
  );
};

export default Footer;
