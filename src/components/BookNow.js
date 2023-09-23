// BookNow.js
import React, { useState } from 'react';
import './BookNow.css';

function BookNow() {
  const [isBookingInProgress, setBookingInProgress] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Simulate a booking process (replace this with your actual booking logic)
    setTimeout(() => {
        setBookingInProgress(true);
      }, 2000); // Simulating a 2-second delay
  
      // You can also send a request to your backend here to process the booking
  
      // Clear the form
      e.target.reset();
    };

  return (
    <div className="book-now-container">
      <h1>Book Your Tour</h1>
      <form className="booking-form" onSubmit={handleBookingSubmit}>
        <div className="form-group">
          <label htmlFor="tour">Select Tour:</label>
          <select id="tour" name="tour">
            <option value="tour1">Tour 1</option>
            <option value="tour2">Tour 2</option>
            <option value="tour3">Tour 3</option>
            {/* Add more tour options */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Tour Date:</label>
          <input type="date" id="date" name="date" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Additional Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Any special requests or messages"></textarea>
        </div>
        {isBookingInProgress ? (
          <p className="booking-message">Your booking is under process. Please wait for our response.</p>
        ) : (
          <button type="submit" className="book-button">Book Now</button>
        )}
      </form>
    </div>
  );
}

export default BookNow;
