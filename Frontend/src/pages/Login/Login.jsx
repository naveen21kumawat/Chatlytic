import React from 'react'
import './Login.css'
import assets from '../../assets/assets'

function Login() {
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo" />
      <form action="" className="login-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder='username' className="form-input" required/><input type="email"  placeholder='Email Address' className="form-input" />
        <input type="password" placeholder='password' className="form-input" />
        <button type='submit'>Sign Up</button>
        <div className='login-term'>
          <input type="checkbox" />
          <p>Agree Terms & Privacy Policy</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggle">Already have an Account <span>Click Here</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login