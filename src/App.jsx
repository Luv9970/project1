import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Info from './Components/Info/Info'
import Wishlist from './Components/Wishlist/Wishlist'
// import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      








    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Info" element={<Info />} />
      <Route path="/Wishlist" element={<Wishlist />} />
    </Routes>






    </div>
  )
}

export default App