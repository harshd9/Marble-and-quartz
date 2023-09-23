// Login.js
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'; // Import Link for navigation and useHistory for programmatic navigation
import './Login.css'; // Import your CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 // Use useHistory for programmatic navigation

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'het' && password === 'hetdoshi') {
    // For this example, we'll assume successful login

    // Redirect to the home page
    navigate('/');
} else {
    // Failed login, display an error message
    setError('Invalid username or password');
  }
};

  return (
    <div className="login-container">
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;
