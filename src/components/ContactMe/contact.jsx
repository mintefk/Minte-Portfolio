import React, { useRef } from 'react';
import './contact.css';
import facebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import Linkedin from "../../assets/linkedin.png";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_zdoxrsw', 'template_mcayjzw', form.current, '3CZSI6q7_iqsCugHu')
      .then((result) => {
          console.log(result.text);
          alert('Email Sent!');
         
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactpage'>
    <div id="contact">
     <h1 className="contactPageTitle">Contact Me </h1>
                            
     <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>

    <form className= 'contactForm' ref={form} onSubmit={sendEmail} >
        
     <input type="text" className="name" placeholder='Your Name'  name='from_name' required />
     <input type="email" className="email" placeholder='Your Email'  name='email'required/>
     <textarea className='msg' name="message" rows="5"  placeholder='Your Message' required/>
      <button type='submit' value='Send' className="submitBtn">Submit</button>
     
     <div className="links">
         <img src= {facebookIcon} alt="" className="link" />
         <img src= {TwitterIcon} alt="" className="link" />
         <img src={YouTubeIcon} alt="" className="link" />
         <img src={Linkedin} alt="" className="link" />
   </div>
   </form>
</div>
</section>

  )
}

export default Contact

