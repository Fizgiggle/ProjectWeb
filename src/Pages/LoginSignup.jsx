import React from 'react'
import './css/LoginSignup.css'
const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name = '' id = ''/>
          <p>I agree to the terms and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Login
