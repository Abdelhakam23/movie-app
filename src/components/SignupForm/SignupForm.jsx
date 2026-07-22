import React, { useState } from 'react';
import './SignupForm.css';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';

export default function SignupForm() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const navigate = useNavigate();

  async function handleSignUp(e) {
   

    const values = {
      name,
      email,
      password,
      rePassword,
      phone
    }
    e.preventDefault();
   const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
     method: "POST",
     headers: {
       "Content-Type":"application/json",
     },
     body: JSON.stringify(values)
   });
    const data = await response.json();
    if (data.message == "success") {
      toast.success("Account created successfully!");
      setTimeout(() => {
        navigate('/login');
      },3000)
    }
    
    

    
  }


  return (
    <div className="signup-card shadow-lg mx-auto my-5">
      
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="signup-title mb-1">Create Account</h2>
        <p className="text-secondary small">Join CineScope to stream your favorite movies</p>
      </div>

      {/* Form UI Only */}
      <form onSubmit={handleSignUp}>
        
        {/* Full Name Field */}
        <div className="mb-3">
          <label className="input-label" htmlFor="fullName">Full Name</label>
          <div className="input-group">
            <span className="input-group-text bg-dark border-secondary text-secondary">
              <i className="bi bi-person"></i>
            </span>
            <input 
              value={name}
              onChange={
                (e) => {
                  setName(e.target.value)
                }
              }
              type="text" 
              className="form-control movie-input" 
              id="fullName"
              placeholder="Mahmoud Ahmed" 
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label className="input-label" htmlFor="email">Email Address</label>
          <div className="input-group">
            <span className="input-group-text bg-dark border-secondary text-secondary">
              <i className="bi bi-envelope"></i>
            </span>
            <input 
              value={email}
              onChange={
                (e) => {
                  setEmail(e.target.value)
                }
              }
              type="email" 
              className="form-control movie-input" 
              id="email"
              placeholder="name@example.com" 
            />
          </div>
        </div>


        {/* Phoone Field */}
         <div className="mb-3">
          <label className="input-label" htmlFor='phone'>Phone Number</label>
          <div className="input-group">
            <span className="input-group-text bg-dark border-secondary text-secondary">
              <i className="bi bi-phone"></i>
            </span>
            <input 
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }}
              type="tel" 
              className="form-control movie-input" 
              id="phone"
              placeholder="+20xxxxxxxxxx" 
            />
          </div>
        </div>
        {/* Password Field */}
        <div className="mb-3">
          <label className="input-label" htmlFor="password">Password</label>
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
              id="password"
              placeholder="••••••••" 
            />
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="mb-3">
          <label className="input-label" htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-group">
            <span className="input-group-text bg-dark border-secondary text-secondary">
              <i className="bi bi-shield-lock"></i>
            </span>
            <input 
              value={rePassword}
              onChange={(e) => {
                setRePassword(e.target.value)
              }}
              type="password" 
              className="form-control movie-input" 
              id="confirmPassword"
              placeholder="••••••••" 
            />
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="form-check mb-4">
          <input className="form-check-input bg-dark border-secondary" type="checkbox" id="terms" />
          <label className="form-check-label text-secondary small" htmlFor="terms">
            I agree to the <a href="#" className="text-secondary text-decoration-underline">Terms & Conditions</a>
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className=" btn-submit-red w-100">
          Sign Up
        </button>

      </form>

      {/* Footer Link */}
      <div className="text-center mt-4 pt-3 border-top border-secondary border-opacity-25">
        <p className="small text-secondary mb-0">
          Already have an account?{' '}
          <Link to="/login" className="login-redirect-link">
            Log In
          </Link>
        </p>
      </div>

    </div>
  );
}