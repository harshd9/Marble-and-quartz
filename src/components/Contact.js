// Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    const { name, email, message } = formValues;
    if (!name || !email || !message) {
      // Set error states for the empty fields
      setFormErrors({
        name: !name,
        email: !email,
        message: !message,
      });
    } else {
      // Here you can add code to handle the form submission, e.g., send data to a server

      // Assuming a successful submission, show the success message
      setMessageSent(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the formValues state as the user types
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="contact-container">
      <header className="header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </header>
      <div className="contact-form">
        {messageSent ? (
          <div className="success-message">
            <p>Your message was sent. We'll contact you shortly.</p>
          </div>
        ) : (
          <form className='inform' onSubmit={handleSubmit}>
            <div className={`form-group ${formErrors.name ? 'error' : ''}`}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formValues.name}
                onChange={handleChange}
              />
              {formErrors.name && <p className="error-message">Please fill in your name.</p>}
            </div>
            <div className={`form-group ${formErrors.email ? 'error' : ''}`}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && <p className="error-message">Please fill in your email.</p>}
            </div>
            <div className={`form-group ${formErrors.message ? 'error' : ''}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && <p className="error-message">Please fill in your message.</p>}
            </div>
            <button type="submit">Send</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
