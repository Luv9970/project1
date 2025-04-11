import React from 'react'
import './Login.css'
import Loginbox from '../Loginbox/Loginbox'
import image1 from '../../assets/image1.png'

const Login = () => {
  return (
    <div className="login-container">
        <div className='login-upperdiv'></div>
        <div className='login-middlediv'>
            <div className='login-middlediv-left'>
                <Loginbox />
            </div>

            <div className='login-middlediv-right'>
                <img src={image1} alt=""/>
            </div>
        </div>
        <div className='login-lowerdiv'></div>
    </div>
  )
}

export default Login