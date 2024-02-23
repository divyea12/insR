import React from 'react'
import "../styles/Login.css"
function Login() {
  return (
    <>
      <div className="main">
        <div className='logo'>
        </div>
        <div className='input'>
          <label for='username' type='email'id='email'></label>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          <button className='login' type='submit' disabled>Log in</button>
        </div>
        <div className='forgot'>
          <span>Forgot Password?</span>
        </div>
      </div>

      <div className='signup'>
        <span>Don't have an account? <strong>Sign up</strong></span>
      </div>
    </>
  )
}

export default Login