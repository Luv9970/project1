import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-image'>
            <div className='footer-image-top'>
                <p>Elegant.</p>
                <p>Enchanting.</p>
                <p>Versencia.</p>
            </div>
            <div className='footer-image-bottom'>
                <div className='footer-image-bottom-left'>
                    <div className='footer-bottom-left-top'>
                        Get it before <br/>
                        everyone else!
                    </div>
                    <div className='footer-bottom-left-bottom'></div>
                </div>
                <div className='footer-image-bottom-right'></div>
            </div>

        </div>
        <div className='footer-content'></div>
    </div>
  )
}

export default Footer