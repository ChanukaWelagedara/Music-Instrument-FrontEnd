import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Use the same CSS file as in Signup component

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5555/users/login', formData);

      if (response.data.alert) {
        alert(response.data.message);
        localStorage.setItem('userDetails', JSON.stringify(response.data.user));
        navigate('/account');
        window.location.reload();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-subtitle">Login to your account</p>
          </div>
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="auth-form"
          >
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <button type="submit" className="auth-button">
              Login
            </button>
          </form>
          
          <div className="auth-footer">
            <p className="auth-footer-text">
              Don't have an account? <a href="/user/Singup" className="auth-link">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
