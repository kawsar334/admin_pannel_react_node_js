import React, { useContext, useEffect } from 'react';
import "./navbar.scss";
import { NavLink, useNavigate } from 'react-router-dom';
import ApiCalls from '../../apicalls/productApi';
import Loader from '../loader/Loader';
import { AuthContext } from '../../contexxt/AuthContext';







const Navbar = ({open, setOpen}) => {
  const navigate = useNavigate();
  const id = localStorage.getItem("user")
  const {data, error, loading} = ApiCalls(`/user/find/${id}`)
  const { user } = useContext(AuthContext)

// handling logout functionaliy
  const handleLogout = (e)=>{
    e.preventDefault();

    if(window.confirm("Are you Sure logout?")){
      localStorage.removeItem("user");
      window.location.reload();
      navigate("/login")
    }
  }

  return (
    <div className='navbar' >
      <div className="icon">
      {!open ? <i className="fa-solid fa-bars" onClick={() => setOpen(!open)}></i>
       : <i className="fa-solid fa-xmark" onClick={() => setOpen(!open)}></i>}
      </div>

     
      

   {loading ?<Loader/>: <NavLink to="/" className="logo">
    {data?.user?.name}
    </NavLink>}
    <div className="searchbar">
      <input type="text" placeholder='Search here...' />
      
    </div>
    <div className="navright">
   {data?.user? <span to="/login" style={{cursor:"pointer"}} className="navlink" onClick={handleLogout}>
      Logout
        </span> : <NavLink to="/login" className="navlink">
          Login
        </NavLink>}
        <NavLink to={`/user/${id}`} className="navlink">
          <img src="https://images.pexels.com/photos/5455609/pexels-photo-5455609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </NavLink>
        <NavLink to="/notification">
          <span style={{color:"crimson",}}>{data?.user?.notification.length}</span>
        <i className="fa-regular fa-bell"></i>
        </NavLink>
        <NavLink to="/message" className="navlink">
          <i className="fa-regular fa-message"></i>
        </NavLink>
    </div>  
    </div>
  )
}

export default Navbar