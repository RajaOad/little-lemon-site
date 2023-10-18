import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './HomePage';
import About from './About';
import Menu from './Menu';
import BookingPage from './BookingPage';
import OrderOnline from './OrderOnline';
import Login from './Login';
import ConfirmedBooking from './ConfirmedBooking';


const Main = () => {
 
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
};

export default Main;
