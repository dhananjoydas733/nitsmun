import React, { useRef } from 'react'
import {FaBars , FaTimes} from "react-icons/fa"
import './Navbar.css'


const Navbar = () => {
    const navRef = useRef() ;
    const showNavBar =()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    const showextra =()=>{
        navRef.current.classList.toggle("extra_nav")
    }

  return (
    <header>
        {/* <h3>Logo</h3> */}
        <nav ref={navRef} >
            <a href="">HOME </a>
            <a href="">ABOUT</a>
            <a href="">TEAM</a>
            <a href="">ANNUAL CONFERENCE 2024</a>
            <a href="">MOCK MUN 2024</a>
            <a href="">APPLY</a>
            
            
            <button  ref={navRef} className='nav-btn nav-close-btn' onClick={showNavBar}>
                <FaTimes/>
            </button>
           
        </nav>
       
        <button className='nav-btn ' onClick={showNavBar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default Navbar