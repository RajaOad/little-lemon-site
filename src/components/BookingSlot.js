import React from 'react';

function BookingSlot({ time, isBooked }) {
  return (
    <div className={`booking-slot ${isBooked ? 'booked' : 'available'}`}>
      <p className="time-label">{time}</p>
      {isBooked ? (
        <div className="booked-label">Booked</div>
      ) : (
        <button className="book-now-button">Book Now</button>
      )}
    </div>
  );
}

export default BookingSlot;
