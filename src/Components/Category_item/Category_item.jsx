import React from 'react'
import './Category_item.css'

const Category_item = () => {
  return (
    <div className='category-item'>
        <div className='category-item-name'>
            Handbags
        </div>
        <div className='category-item-image'>
            <img src="https://images.unsplash.com/photo-1742238861697-b54509120e13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="category" />
        </div>
    </div>
  )
}

export default Category_item