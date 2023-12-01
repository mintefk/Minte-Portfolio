import React, { useState } from 'react';
import './navbar.css';
import menu from '../../assets/13.png';
import logo from '../../assets/logo.png';

import { Link } from 'react-scroll';
import PhoneNumberToggle from './phone.jsx';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      
      <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link activeClass='active' className="desktopMenuListItem" to="intro" spy={true} smooth={true} offset={-90} duration={500}>
          Home
        </Link>
        <Link activeClass='active' className="desktopMenuListItem" to="skill" spy={true} smooth={true} offset={-80} duration={500}>
          About
        </Link>
        <Link activeClass='active' className="desktopMenuListItem" to="project" spy={true} smooth={true}  offset={-90} duration={500}>
          Projects
        </Link>
        <Link activeClass='active' className="desktopMenuListItem" to="contact" spy={true} smooth={true} offset={-90} duration={500}>
          Contact Me
        </Link>

      </div>

      <div className='phone'>
          <PhoneNumberToggle />
        </div>
                
      <button className="desktopMenubtn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? 'Close' :  <img src={menu} alt="" className="bgph" /> }
      </button>
    </nav>
  );
};

export default Navbar;

