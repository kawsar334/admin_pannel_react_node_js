import React from 'react';
import "./menu.scss"
import { NavLink } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure logout ?")) {
      const user = localStorage.removeItem("user");
      window.location.reload();
    }
  };
  return (
    <div className='menu'>

      {<ul>
        <span className='close' onClick={() => setOpen(!open)}>x</span>

        <li><NavLink to="/"><i className="fa-solid fa-house"></i><span>Home</span></NavLink></li>
        <li><NavLink to="/users"><i className="fa-solid fa-users"></i><span>Users</span></NavLink></li>
        <li><NavLink to="/products"><i className="fa-brands fa-product-hunt"></i><span>Products</span></NavLink></li>

        <li><NavLink to="/register"><i className="fa-regular fa-address-card"></i><span>Register</span></NavLink></li>
        <li><NavLink to="/message"><i className="fa-regular fa-message"></i><span>message</span></NavLink></li>
        <li><NavLink to="/"><i className="fa-solid fa-bell"></i><span>notification</span></NavLink></li>
        <li><NavLink to="/cat"><i className="fa-solid fa-arrow-right-to-bracket"></i><span>Add category</span></NavLink></li>
        <li><NavLink to="/addproduct"><i className="fa-solid fa-plus"></i><span>Add Product</span></NavLink></li>
        {/* <li><NavLink to="/login"><i className="fa-solid fa-arrow-right-to-bracket"></i><span>Logout</span></NavLink></li>
         */}
        <li onClick={handleLogout}>Logout</li>
      </ul>}
    </div>
  )
}

export default Menu