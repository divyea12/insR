import React from 'react'
import "../styles/ForgetPass.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function ResetPass() {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    const [otp, setOtp] = useState();
    const navigate = useNavigate();
    async function ResetHandler() {
        try {
            let res = await axios.post("http://localhost:3001/resetPassword", { email:email,password: password, confirmPassword: confirmPassword,otp:otp });
            console.log(res.data);
            if(res.data.message=='password changed'){
                window.alert("password changed");
                navigate('/login');
            }
            else{
                window.alert("otp invalid");
            }
        } catch (err) {
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
                <span className='ss'>Enter your new Password and Confirm it<br /> and we will change your password.</span>
                <input type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                <input type='text' placeholder='OTP' required onChange={(e) => setOtp(e.target.value)} />
                <input type='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                <input type='password' placeholder='Confirm Password' required onChange={(e) => setConfirmPassword(e.target.value)} />
                <button className='login' type='submit' onClick={ResetHandler}>Reset Password</button>
                <Link to='/'><span className='s'>Create new Account</span></Link>

                <div className='back'>
                    <Link className='link' to='/login'>Back to login</Link>
                </div>
            </div>
        </>
    )
}

export default ResetPass