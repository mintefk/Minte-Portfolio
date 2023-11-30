import React from 'react';
import './contact.css';
import facebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import Linkedin from "../../assets/linkedin.png";

const Contact = () => {

  return (
    <section id='contactpage'>
    <div id="contact">
     <h1 className="contactPageTitle">Contact Me </h1>
                            
     <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>

    <form className= 'contactForm'  >
        
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

