import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <main className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          We'd love to hear from you! Reach out via the form or our contact info below.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <p><strong>📞 Phone:</strong> +91-9876543210</p>
            <p><strong>📧 Email:</strong> support@booknest.com</p>
            <p><strong>📍 Address:</strong> 123 Palm Street, Hyderabad, India</p>
          </div>

          <form className="contact-form">
            <label>
              Your Name:
              <input type="text" placeholder="Enter your name" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label>
              Message:
              <textarea placeholder="Type your message here..." required></textarea>
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </main>

      
    </div>
  );
};

export default Contact;
