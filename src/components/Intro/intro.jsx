import React from 'react';
import './intro.css';
import bg from '../../assets/por.gif';
import PhoneNumberToggle from '../Navbar/phone.jsx';

const intro = () => {
  return (
    <section id="intro" >
      <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introtext">I'm <span className="introname">Mintesnot Fikre </span> <br />FullSatck Developer </span>
            <p className="intropara">I am Skilled in designing and implementing end-to-end solutions. <br />Expertise in front-end and back-end technologies for creating web applications.</p>
            <div className='phone'>
          <PhoneNumberToggle />
        </div>
      </div>
      <img src={bg} alt="profile" className="bg" />  
    </section>
  )

  }

export default intro 

