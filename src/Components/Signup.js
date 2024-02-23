import React from 'react'
import "../styles/Signup.css"
function Signup() {
  return (
    <>
      <div className="main">
        <div className='logo'>
        </div>
        <div className='p'>
          <p>Signup to see photos and videos <br></br> from friends</p>
        </div>
        <div className='input'>
          <label for='username' type='email'id='email'></label>
          <input type='email' placeholder='email'/>
          <input type='name' placeholder='Full Name'/>
          <input type='name' placeholder='Username'/> 
          <input type='password' placeholder='password'/>
          <button className='login' type='submit' disabled>Sign up</button>
        </div>
      </div>

      <div className='signup'>
        <span>Have an account? <strong>Log in</strong></span>
      </div>
    </>
  )
}

export default Signup;