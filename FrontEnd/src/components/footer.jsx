import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-content">
          <h3 className="footer-newsletter-title">Join our mailing list</h3>
          <div className="footer-newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="footer-newsletter-input"
            />
            <button className="footer-newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-payment">
            <img 
              className="footer-payment-img" 
              alt="Payment methods" 
              src="615-6155786_card-payments-logo-uk-png-transparent-png 1.png" 
            />
          </div>
          
          <div className="footer-text">
            <p className="footer-copyright">
              Copyright © 2023 Chanu@Music.
            </p>
            <p className="footer-rights">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
