import React from 'react'
import "../styles/ForgetPass.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function ForgetPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  async function ForgetHandler() {
    try {
      console.log(email);
      let res = await axios.post("http://localhost:3001/forgetPassword", { email: email });
      console.log(res.data);
      if (res.data.message == 'Signup first'){
        window.alert("sign up first");
      }
      else if(res.data.message="otp sent") {
        window.alert("otp sent");
        navigate('/resetPassword');
      }
    }
    catch (err) {
      console.log("err", JSON.stringify(err.message));
    }
  }
  return (
    <>
      <div className='ins'>
        <Link to='/login'><h6>Instagram</h6></Link>
      </div>

      <div className='inputt'>
        <div className='ig'>

        </div>
        <label for='username' type='email' id='email'></label>
        <span className='ss'>Enter your email, phone, or username and we'll<br /> send you a link to get back into your account.</span>
        <input type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />

        {/* <input type='name' placeholder='Full Name' /> */}
        {/* <input type='name' placeholder='Username' /> */}
        {/* <input type='password' placeholder='password' /> */}
        <button className='login' type='submit' onClick={ForgetHandler}>Send OTP</button>
        <Link to='/'><span className='s'>Create new Account</span></Link>

        <div className='back'>
          <Link className='link' to='/login'>Back to login</Link>
        </div>
      </div>
    </>
  )
}

export default ForgetPass