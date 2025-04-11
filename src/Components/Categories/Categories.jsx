import React from 'react'
import './Categories.css'
import Category_item from '../Category_item/Category_item'

const Category = () => {
  return (
    <div className='category'>
        <div className='category-top'>
          <p>Explore Popular Categories</p>
        </div>
        <div className='category-bottom'>
          <Category_item/>
          <Category_item/>
          <Category_item/>
          <Category_item/>
        </div>
    </div>
  )
}

export default Category