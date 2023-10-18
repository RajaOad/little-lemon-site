import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const MobileMenu = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    // Close the mobile menu when a link is clicked
    onClose();
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <FaTimes className="close-icon" onClick={onClose} />
      <ul>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={handleLinkClick}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" onClick={handleLinkClick}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online" onClick={handleLinkClick}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={handleLinkClick}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
