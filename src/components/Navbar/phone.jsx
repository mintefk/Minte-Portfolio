// PhoneNumberToggle.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../Intro/intro.css';
import './phone.css'; 
import btnimg from '../../assets/hireme.png';

const PhoneNumberToggle = () => {
  const [isPhoneNumberVisible, setPhoneNumberVisible] = useState(false);

  const handleToggle = () => {
    setPhoneNumberVisible(!isPhoneNumberVisible);
  };

  return (
    <div className="phone-number-toggle">
      {/* Button trigger modal */}
      <button type="button" className="btn" onClick={handleToggle}>
        <img src={btnimg} alt="Hire Me" className="btnimg" />Hire Me </button>

      {/* Modal */}
      <Modal show={isPhoneNumberVisible} onHide={handleToggle}>
       
        <Modal.Body>
          <p>
            Call me at:
            <br />
            <a href="tel:+251938972720">+2519-38-97-27-20</a> <br/>
            <a href="tel:+25154188580">+2519-54-18-85-80</a>
          </p>
          <Button className='but' variant="secondary" onClick={handleToggle}>
            Close
          </Button>
        </Modal.Body>
        
          
          {/* If you want a button for some action, you can add it here */}
          {/* <Button variant="primary">Save changes</Button> */}
        
      </Modal>
    </div>
  );
};

export default PhoneNumberToggle;

