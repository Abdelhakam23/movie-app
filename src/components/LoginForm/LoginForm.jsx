import React, { useState } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  async function handleLogin(e) {
    e.preventDefault();

    const values = {
      email,
      password
    }

    const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    if (data.message == 'success') {
      toast.success('Logged in successfully');
      setTimeout(() => {
        navigate('/')
      },3000)
    }
    
    
  }

  return (
    <div className="login-card shadow-lg mx-auto ">
      
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="login-title mb-1">Welcome Back</h2>
        <p className="text-secondary small">Log in to access your CineScope account</p>
      </div>

      {/* Form UI Only */}
      <form onSubmit={handleLogin}>
        
        {/* Email Field */}
        <div className="mb-3">
          <label className="input-label" htmlFor="loginEmail">Email Address</label>
          <div className="input-group">
            <span className="input-group-text bg-dark border-secondary text-secondary">
              <i className="bi bi-envelope"></i>
            </span>
            <input 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email" 
              className="form-control movie-input" 
              id="loginEmail"
              placeholder="name@example.com" 
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="input-label" htmlFor="loginPassword">Password</label>
          <div className="input-group">
            <span className="input-group-text bg-dark border-secondary text-secondary">
              <i className="bi bi-lock"></i>
            </span>
            <input 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password" 
              className="form-control movie-input" 
              id="loginPassword"
              placeholder="••••••••" 
            />
          </div>
        </div>

        {/* Remember & Forgot Password */}
        <div className="d-flex justify-content-between align-items-center mb-4 small">
          <div className="form-check">
            <input className="form-check-input bg-dark border-secondary" type="checkbox" id="rememberMe" />
            <label className="form-check-label text-secondary" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="#" className="text-secondary text-decoration-none hover-white">
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button type="submit" className=" btn-submit-red w-100">
          Log In
        </button>

      </form>

      {/* Footer Link */}
      <div className="text-center mt-4 pt-3 border-top border-secondary border-opacity-25">
        <p className="small text-secondary mb-0">
          New to MovieApp?{' '}
          <Link to="/signup" className="signup-redirect-link">
            Create an account
          </Link>
        </p>
      </div>

    </div>
  );
}