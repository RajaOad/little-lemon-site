import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import hamburgerIcon from '../assets/hamburger.svg';
import basketIcon from '../assets/basket.svg';
import MobileMenu from './MobileMenu';

const Nav = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <img src={hamburgerIcon} alt="Menu" />
      </div>
      <div className="logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="basket-icon">
        <img src={basketIcon} alt="Basket" />
      </div>
    </header>
  );
};

export default Nav;
