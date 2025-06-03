
import '../css/Contact.css';
import React from "react";
import ContactForm from "./ContactForm";
import { FaWhatsapp } from 'react-icons/fa';
 <FaWhatsapp size={30} color="#25D366" />;
function Contact() { 
    return (
  <main className="section">
    <div className="container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We are here to assist you with your sourcing needs. Please reach out to us through any of the following methods:
      </p>
      <ContactForm />

      <ul className="contact-list">
        <li> 
          <strong className="eamil">Email:</strong> <a href="mailto:k6CQ3@example.com">k6CQ3@example.com</a>  
        </li>        
        <li>  
          <strong className='phone'>Phone:</strong> +1 (123) 456-7890
        </li>
        <li>
          <strong className='address'>Address:</strong> 123 Main Street, City, Country
        </li>
        <li>
          <strong className='hours'>Business Hours:</strong> Monday to Friday, 9 AM - 5 PM
        </li>
        </ul>
          <div className='follow'>Follow us on:</div>
          <ul className="social-links">
            <li className='facebook'><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li className='twitter'><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li className='linkedin'><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li className='instagram'><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li className='youtube'><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li className='pinterest'><a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
            <li className='tiktok'><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li className='whatsapp'><a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"> <FaWhatsapp size={30} color="#25D366" />WhatsApp</a></li>
            <li className='telegram'><a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li className='wechat'><a href="https://www.wechat.com" target="_blank" rel="noopener noreferrer">WeChat</a></li>
            <li className='slack'><a href="https://www.slack.com" target="_blank" rel="noopener noreferrer">Slack</a></li>
            <li className='github '><a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li> 
          </ul>
        </div>
        <li>
          <strong>Contact Form:</strong> 
          <a href="/contact-form" className="contact-form-link">Fill out our contact form</a>  
        </li>
  </main>
    );
}   

export default Contact; 