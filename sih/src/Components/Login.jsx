import React, { useState } from 'react';
import { UseJPLogin } from '../Hooks/UseJPLogin';
import {  UseJSLogin } from '../Hooks/UseJSLogin';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import updated icons

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { JPlogin, error } = UseJPLogin();
  const { Userlogin, usererror } = UseJSLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === 'JP') {
      await JPlogin(email, password);
    } else if (type === 'JS') {
      await Userlogin(email, password);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user">Select User Type</label>
            <select
              id="user"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="JP">JOB PROVIDER</option>
              <option value="JS">Looking for an JOB</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>
          <input type="submit" value="Login" />
        </form>
        {error && <div className="error-message">{error}</div>}
        {usererror && <div className="error-message">{usererror}</div>}
      </div>
    </div>
  );
};

export default Login;
