import React, { useEffect, useMemo, useState } from 'react'
import "./register.scss";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin]  = useState(true);
  const handleChange = (e)=>{
    setUser((prev)=>{
      return {
        ...prev, [e.target.name]:e.target.value
      }
    })
  }


// sending data to backend 
const handleRegister =async (e)=>{
  e.preventDefault();
  try{
  const res = await axios.post(`/auth/register`, {...user, isAdmin});
    if(res.data.success){
      navigate("/login")
    }else{
      navigate("/register")
    }
  }catch(err){
    console.log(err);
  }
}

  return (
    <div className='register'>
   <div className="registerwrapper">
        <h1>signup Now</h1>

    <form action="" className="form" onSubmit={handleRegister}>
      <div className="formleft">
        <div className="registeritem">
          <label htmlFor="name">name</label>
          <input onChange={handleChange} type="text" required name='name' placeholder="Enter your name" />
        </div>
            <div className="registeritem">
              <label htmlFor="email">Email</label>
              <input onChange={handleChange} type="email" name='email' required placeholder="Enter your name" />
            </div>
            <div className="registeritem">
              <label htmlFor="password" >password</label>
              <input onChange={handleChange} type="password" required  name='password' placeholder="Enter a password" />
            </div>
      </div>
      <div className="formright">
            {/* <div className="registeritem">
              <label htmlFor="name">name</label>
              <input onChange={handleChange} type="text" placeholder="Enter your name" />
            </div> */}
            <div className="registeritem">
              <label htmlFor="role">isAdmin</label>
              <select name="isAdmin" onChange={handleChange} value={user.isAdmin}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>
            <div className="registeritem">
            <button>Register</button>
            </div>
    <p>Already have an account? <NavLink to="/login">Login </NavLink></p>
      </div>
    </form>
   </div>
    </div>
  )
}

export default Register ;