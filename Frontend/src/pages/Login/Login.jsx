import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'

function Login() {

  const [ currState , setCurrState] = useState("Sign up")

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo" />
      <form action="" className="login-form">
        <h2>{currState}</h2>
        {currState === 'Sign up' ? <input type="text" placeholder='username' className="form-input" required/>:null}<input type="email"  placeholder='Email Address' className="form-input" />
        <input type="password" placeholder='password' className="form-input" />
        <button type='submit'>{currState === "Sign up" ? "Create Account ": "Login"}</button>
        <div className='login-term'>
          <input type="checkbox" />
          <p>Agree Terms & Privacy Policy</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign up"? 
          <p className="login-toggle">Already have an Account <span onClick={()=>setCurrState("Login")}>Click Here</span></p>:
          <p className="login-toggle">Create an acoount <span onClick={()=>setCurrState("Sign up")}>Click Here</span></p>
        }
        </div>
      </form>
    </div>
  )
}

export default Login