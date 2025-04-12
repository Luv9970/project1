import React from 'react'
import './Footer.css'
import { FaArrowRight } from "react-icons/fa6";


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

                    <div className='footer-bottom-left-bottom'>
                        <div className="footer-button">
                            <p>Yor Email Address</p>
                            <div className="footer-button-icon">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='footer-image-bottom-right'>
                    <div className='footer-right-bottom1'>
                        <p>
                            2025 Lookbook
                         </p>
                    </div>
                    <div className='footer-right-bottom1'>
                        <p>Shop Now</p>
                        <div className='footer-button-icon'>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='footer-content'>
            <div className='footer-content-top'>
                <div className='d1'>
                    <p>About</p>
                    <p>How it works</p>
                    <p>contact</p>
                </div>
                <div className='d2'>
                SHOPLY
                </div>
            </div>

            <div className='footer-content-middle'>
                <div className='d3'></div>
            </div>

            <div className="last-line">
                <div className='d4'>copyright©</div>
                <div className='d5'>Code by Luv</div>
            </div>
        </div>
    </div>
  )
}

export default Footer