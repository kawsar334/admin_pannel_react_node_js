import React, { useContext, useEffect, useReducer, useState } from 'react'
import "./login.scss";
import { NavLink, useNavigate } from 'react-router-dom';
import LoginApi from '../../apicalls/LoginApi';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../contexxt/AuthContext';


const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handling login functionality 
  const handleLogin  =async (e)=>{
    e.preventDefault();
   LoginApi(dispatch , {email, password});
   
  };



  
  
  return (
    <div className='login'>
      <div className="loginwrapper">
        <form  className="loginform" onSubmit={handleLogin}>
          <h1>Singin now</h1>
          <div className="loginitem"> 
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter your Email' id='email'  onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="loginitem">
            <label htmlFor="password">password</label> 
            <input type="password" placeholder='Enter your password' id='email'  onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          
          <div className="loginitem">
           <button className='loginbtn'>Login</button>
          </div>
        </form>
          <p>Don't have any account ?<NavLink to="/register">Register</NavLink></p>
      </div>
    </div>
  )
}

export default Login