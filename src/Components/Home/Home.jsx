import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { FaArrowRightLong } from "react-icons/fa6";
import Categories from '../Categories/Categories';
import Marquee from '../Marquee/Marquee';
import Footer from '../Footer/Footer';
import { FaBasketballBall } from "react-icons/fa";
import { GrSemantics } from "react-icons/gr";




const Home = () => {
  return (

    <>
    <div className='home'>
        <Navbar/>
        <div className="home-container">
            <div className="home-left">
                <div className='home-left-container'>
                    <div className="home-left-item1">
                        <div className="home-left-top">
                             <FaBasketballBall />
                        </div>
                        <div className="home-left-top">
                            <GrSemantics />
                        </div>
                    </div>
                    <div className="home-left-item2">
                        <div className="home-left-middle">Men</div>
                        <div className="home-left-middle">Women</div>
                        <div className="home-left-middle">Kids</div>
                    </div>
                    <div className="home-left-item3">
                        <div className="home-left-bottom1">Show More</div>
                        <div className="home-left-bottom2">
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-right">
                <div className='home-right-container1'>
                    <div className='home-right-container1-text1'>
                        <h1>Let's shop</h1><br/>
                        <h1>All-In-One</h1>
                    </div>
                    <div className='home-right-container1-text2'>
                        <p>Visit collectibles and follow your passion</p>
                    </div>
                </div>
                <div className='home-right-container2'>
                    <div className="home-right-top">
                        <div className='home-right-top-text1'>
                            Best Service
                        </div>
                    </div>
                    <div className="home-right-middle">
                        <p>Why our products<br/>
                        make you happy</p>
                    </div>
                    <div className="home-right-bottom">
                        <div className='home-right-bottom-image'>
                            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt=""/>
                        </div>
                        <div className='home-right-bottom-text'>
                            <div className='home-right-bottom-text1'>
                                Best Value
                            </div>
                            <div className='home-right-bottom-text2'>
                                Cash-Back    
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className='searchbox'>
                
                <div className='searchbar'>
                    <input type="text" placeholder='🔍Search' className='search-input'/>
                    <button className='search-button'>Search</button>
                </div>

                <div className='search-items'>
                    <div className='search-item1'>
                        Recent
                    </div>
                    <div className='search-item2'>
                        Popular Items
                    </div>
                    <div className='search-item3'>
                        Special Offers
                    </div>
                    <div className='search-item4'>
                        <p>
                           <b>
                             Show All
                            </b> 
                        </p>
                        <div className='show-all'>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <Categories/>
    <Marquee/>
    <Footer/>
    </>
  )
}

export default Home