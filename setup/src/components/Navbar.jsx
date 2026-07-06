import React from 'react'
import logo from "../assets/logo.webp"
import "../styles/navbar.css"

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
          <p>Hi, User</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar