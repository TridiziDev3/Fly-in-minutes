import React from 'react'
import './Navbar.css'
import logo from "../../assets/Navbar/FlyInMinute.svg"
const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className='navbar_logo'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='navbar_buttons'>
        <button className='navbar_btn1'>Support</button>
        <button className='navbar_btn2'>SIGN IN</button>
      </div>
    </div>
  )
}

export default Navbar
