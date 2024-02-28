import React from 'react'
import "../styles/Login.css"
import {Link} from "react-router-dom"
import {useState,useEffect} from 'react'
import axios from 'axios' 
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../Context/Auth'
function Login() { 
  const navigate = useNavigate();
  const user =JSON.parse(localStorage.getItem('user'));
  console.log(user);
  if(user)  navigate('/feed');
  const {setUser} = useAuth();
  const [email,setEmail] = useState();
  const[password,setPassword] = useState(); 
  async function LoginHandler(){
    try{
      let res = await axios.post("http://localhost:3001/login",{email:email,password:password});
      console.log(res.data.user);
      setUser(res.data.user);
      localStorage.setItem("user",JSON.stringify(res.data.user));
      console.log(user);  
      navigate('/feed');
    }catch(err){
      console.log("in errr");
      console.log(JSON.stringify(err));
    }
  }

  useEffect(()=>{
    if(user)
        navigate('/feed')
  },[])

  console.log(user);
  return (
    <>
      {
        (!user)?
        <div>
          <div className="main">
        <div className='logo'>
        </div>
        <div className='input'>
          <label for='username' type='email'id='email'></label>
          <input type='email' placeholder='email' required  onChange={(e)=>setEmail(e.target.value)}/>
          <input type='password' placeholder='password' required  onChange={(e)=>setPassword(e.target.value)}/>
          <button className='login' type='submit' onClick={LoginHandler} >Log in</button>
        </div>
        <div className='forgot'>
          <span><Link to="/forgetPassword">Forgot Password?</Link></span>
        </div>
      </div>

      <div className='signup'>
        <Link to='/'>Don't have an account? <strong>Sign up</strong></Link>
      </div>
        </div>:<></>
      }
    </>
  )
}

export default Login