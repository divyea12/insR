import React from 'react'
import "../styles/Signup.css"
import { Link } from "react-router-dom"
import axios from "axios";
import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import {useAuth} from '../Context/Auth'
function Signup() {
  const navigate = useNavigate();
  const user = useAuth();
  const setUser = useAuth();
  const [name,setName] = useState();
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const[username,setUsername] = useState();
  const[confirmPassword,setConfirmPassword] = useState();
  async function SignUpHandler(){
    try{
      console.log("in");  
      let res = await axios.post("http://localhost:3001/signup",{name:name,email:email,username:username,password:password,confirmPassword:confirmPassword});
      console.log(res.data.err);
      if(res.data.message=="Email already used"){
        window.alert("Email already used. Use another email to signup");
      }else if(res.data.err=="InstaUser validation failed: confirmPassword: Password doesnot match"){
        window.alert("password mismatch");
      }else{
        navigate('/login');
      }
    }catch(err){
      console.log("err",err.message);
      return;
    }
  }
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
          <input type='email' placeholder='email'name='email' required='true' onChange={(e)=>setEmail(e.target.value)} />
          <input type='name' required placeholder='Full Name' onChange={(e)=>setName(e.target.value)} />
          <input type='name' placeholder='Username' required  onChange={(e)=>setUsername(e.target.value)}/>
          <input type='password' placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
          <input type='password' placeholder='Confirm password' required onChange={(e)=>setConfirmPassword(e.target.value)}/>
          <button className='login' type='submit' onClick={SignUpHandler}>Sign up</button>
        </div>
      </div>

      <div className='signup'>
        <Link to='/login'>Have an account? <strong>Log in</strong></Link>
      </div>
    </>
  )
}

export default Signup;