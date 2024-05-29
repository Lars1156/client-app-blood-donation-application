import React from 'react';
import './css.files/contact.css'; 

const ContactUs = () => {
    return (
        <div className="contactus-container">
            <h1 className="contactus-title">Contact Us</h1>
            <div className="contactus-content">
                <div className="contactus-card">
                    <h2 className="contactus-subtitle">Get in Touch</h2>
                    <form className="contactus-form">
                        <input type="text" className="contactus-input" placeholder="Your Name" required />
                        <input type="email" className="contactus-input" placeholder="Your Email" required />
                        <textarea className="contactus-textarea" placeholder="Your Message" required></textarea>
                        <button type="submit" className="contactus-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
