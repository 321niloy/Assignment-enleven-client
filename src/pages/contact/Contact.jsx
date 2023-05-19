import React from 'react';
import './contact.css'
import { FaRegAddressCard , FaBlenderPhone,FaEnvelopeOpen} from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <section>
    
    <div class="section-header">
      <div class="container ">
        <h2 className='text-4xl text-pink-600'>Contact Us</h2>
        <p className='text-pink-400 text-xs lg:text-lg'>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since <br /> the 1500s, when an unknown printer took <br /> a galley of type and scrambled <br /> it to make a type specimen book.</p>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <FaRegAddressCard className='lg:w-44 w-36 mt-2 text-2xl'/>
            </div>
            
            <div class="contact-info-content text-xs lg:text-xl">
              <h4>Address</h4>
              <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
             <FaBlenderPhone className='lg:w-44 w-36 mt-2 text-2xl'/>
            </div>
            
            <div class="contact-info-content text-xs lg:text-xl">
              <h4>Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <FaEnvelopeOpen className='lg:w-48 w-56 mt-1 lg:text-2xl'/>
            </div>
            
            <div class="contact-info-content text-xs lg:text-xl">
              <h4>Email</h4>
             <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""/>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""/>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
   
        </>
    );
};

export default Contact;