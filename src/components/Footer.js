import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src="../../footerlogo.png" alt="Your Logo" />
        </div>
          <div className="link-list">
            <h4>Doormat Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/order-online">Order Online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
          <div className="link-list">
            <h4>Contact</h4>
            <ul>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Support</Link></li>
              <li><Link to="#">FAQ</Link></li>
            </ul>
          </div>
          <div className="link-list">
            <h4>Social Media</h4>
            <ul>
              <li><a href="https://facebook.com/" target='_blank' rel="noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target='_blank' rel="noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target='_blank' rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
