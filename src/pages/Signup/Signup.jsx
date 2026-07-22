import React from 'react'
import './Signup.css'
import SignupForm from '../../components/SignupForm/SignupForm'

export default function Signup() {
  return (
    <div className='signup-page-wrapper d-flex align-items-center justify-content-center flex-grow-1 py-5'>
      <div className="container">
      <SignupForm/>

      </div>
    </div>
  )
}
