import React from 'react'
import './Navbar.css'
import { HiMiniHome } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { FaAngellist } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <div>
          LOGO
        </div>
      </div>

      <div className='navbar-right'>
        <div className='navbar-item-all'>

        <div className='navbar-item'>
          Home
          {/* <div className="navbar-icon">
          <HiMiniHome />
          </div> */}
        </div>

        <NavLink to="/Wishlist" className='navlink'>
          <div className='navbar-item'>
            Wishlist
            {/* <div className="navbar-icon">
            <FaAngellist/>
            </div> */}
          </div>
        </NavLink>

        <NavLink to="/Cart" className='navlink'>
          <div className='navbar-item'>
            {/* Cart */}
            <div className="navbar-icon">
              <HiOutlineShoppingCart />
            </div>

          </div>
          </NavLink>
        </div>
       
        <NavLink to="/" className='navlink'>
          <div className='navbar-logout'>Logout</div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar