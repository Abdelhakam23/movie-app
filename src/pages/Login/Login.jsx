import React from 'react'
import './Login.css'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function Login() {
  return (
    <div className='login-page-wrapper d-flex align-items-center justify-content-center flex-grow-1 py-5'>
      <div className="container">
      <LoginForm/>
      </div>
    </div>
  )
}
