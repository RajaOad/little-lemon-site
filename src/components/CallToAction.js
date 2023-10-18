import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className='main hero-sec'>
    <div className="call-to-action">
      <div className="text-content">
        <h1 className='title'>Little Lemon</h1>
        <h2 className='sub-title'>Chicago</h2>
        <p className='description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link className='btn' to='/reservations'>Reserve a Table</Link>
        
      </div>
      <div className="image">
        <img src="../../restauranfood.jpg" alt="Restaurant" />
      </div>
    </div>
    </div>
  );
}

export default CallToAction;
