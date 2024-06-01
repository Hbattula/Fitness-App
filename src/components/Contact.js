import React from 'react';
import './styles.css'; 
const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-form">
        <input type="text" placeholder="Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <textarea placeholder="Message" className="input-field textarea"></textarea>
        <button className="submit-button">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
