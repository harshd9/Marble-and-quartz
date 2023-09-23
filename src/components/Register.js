// Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Register.css'; // Import your CSS file

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Implement your registration logic here
    // For this example, we'll assume successful registration

    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <div className="register-container">
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
