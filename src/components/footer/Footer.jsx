import React from 'react'
import "./footer.scss"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
   
    <div className='footer'>
      <div className="footertop">
        <div className="playstore">
          <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" />
          <p >Download on </p>
          <p > Apple Store </p>
        
        </div>
        <div className="applestore">
          <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" />
          <p >Download on </p>
          <p className=""> Google Play Store </p>
        
      </div>
        <div className="aboutus">
          <NavLink to="/">About us</NavLink>
          <NavLink to="/">Contact us</NavLink>
          <NavLink to="/">Privacy Policy</NavLink>
        </div>
      </div>
      <div className="footerbottom">
        <div className="footeritem">
          <h2>Our Products</h2>
          <ul>
            <li><NavLink to="/">Women </NavLink></li>
            <li><NavLink to="/">men's shirts,Men's T-shirts </NavLink></li>

            <li><NavLink to="/">Online Grocery</NavLink></li>
            <li><NavLink to="/"></NavLink></li>
            <li><NavLink to="/">electronic</NavLink></li>
                   </ul>
        </div>
       
        <div className="footeritem">
          <h2>women fashion </h2>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">contact</NavLink></li>
            <li><NavLink to="/">Register</NavLink></li>
            <li><NavLink to="/">blog</NavLink></li>
            <li><NavLink to="/">about us</NavLink></li>

          </ul>
        </div>
        <div className="footeritem">
          <h2>Connect us with social links</h2>
          <ul>
            <li><NavLink to="/">Facebook</NavLink></li>
            <li><NavLink to="/">Instragram</NavLink></li>

            <li><NavLink to="/">Linkdin</NavLink></li>
            <li><NavLink to="/">twitter</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">message</NavLink></li>
          </ul>
        </div>
        <div className="footeritem">
          <h2> Location</h2>
          <ul>
            <li><a href="https://goo.gl/maps/HrWGwSBY5gdcqq1u6" target='_blank'>
              <i className="fa-solid fa-location-dot"></i><span> Taif 26513 /saudi arabia,</span>
              </a></li>
            </ul>
        </div>
       
      </div>

    </div>  
  )
}

export default Footer