import React from 'react'
import phone from "../assets/phone.webp"
import  "../styles/banner.css"

const Banner = () => {
  return (
    <div className='banner'>
      <img src= {phone}  className='img'/>
      <div>
       
        <h1 className='h1'>Up to 50% off</h1>
        <h3 className='h3'>Create More. Dream Bigger. iPhone Makes It Possible.</h3>
        <button className='btn'>Buy Now</button>
        <button className='btn1'>Add to cart</button>
      </div>
    </div>
  )
}

export default Banner