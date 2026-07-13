import React from 'react'
import "../styles/item.css"

const Item = ({product}) => {
  return (
    <div className='item'>
      <div className='image'>
        <span>⭐</span>
        <img src={product.url} />
      </div>
      <div className='info'>
        <h1>{product.name}</h1>
        <p>{product.price}/-</p>
        <button className='buy'>Buy Now</button>
      </div>
    </div>
  )
}

export default Item