import React from 'react'
import logo from "../assets/google.png"
import "../styles/navbar.css"
import icon from "../assets/icon.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='brand'>
        <img src={logo} className='logo' />
        <h1 className='brand_name'>Website</h1>
      </div>

      <div className='action'>
        <div className='navLinks'>
          <p>Home</p>
          <p>WishList</p>
          <p>Cart</p>
        </div>
        <input placeholder='Search items..' />
        <div className='user'>
          {/* <img src="" /> */}
          <img src={icon} className='icon' />
          <p>Login User</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar