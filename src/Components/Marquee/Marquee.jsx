import React from 'react'
import './Marquee.css'
import Marqueees from '../Marquees/Marqueees'

const Marquee = () => {
  return (
    <div className='marquee'>
        <Marqueees/>
        <Marqueees/>
        <Marqueees/>
        <Marqueees/>
    </div>
  )
}

export default Marquee