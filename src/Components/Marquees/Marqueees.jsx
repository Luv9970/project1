import React from 'react'
import './Marquees.css'
import { FaArrowRight } from "react-icons/fa6";


const Marqueees = () => {
  return (
    <div className='moving'>
        <p>
            all-in-one
        </p>
        <div className='moving-arrow'>
            <FaArrowRight />
        </div>
    </div>
  )
}

export default Marqueees