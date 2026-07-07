import React from 'react'
import Item from './Item'
import "../styles/categoryItems.css"

const CategoryItems = ({ name, products }) => {
  return (
    <div className='category_container'>
        <h1>{name}</h1>
        <div className='items'>
            {products?.map(p => <Item product={p} />)}

            {/* <Item name="Summer 1" />
            <Item name="Summer 2" />
            <Item name="Summer 3" />
            <Item name="Summer 4"/> */}
        </div>
    </div>
  )
}

export default CategoryItems