import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import logo from '../../assets/logoBK.png'
// import {FaRegTimesCircle} from 'react-icons/fa'
// import {BsFillHouseFill} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'

import '../NavBar/navbar.css'

import { useState } from 'react'

function NavBar2() {
    const[click,setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
            <div className="hamburger" onClick={handleClick}>
                    {click ? (<AiOutlineClose className = 'icon' />) :(<HiOutlineMenuAlt4 className='icon' />)}
                    
            </div>
            <Link to="/" className='logo'>
                <img src={logo}alt="Logo here"/>
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="https://e-learning.hcmut.edu.vn/">BKEL</a></li>
                <li><a href="https://mybk.hcmut.edu.vn/">MYBK</a></li>
                <li><a href="http://aao.hcmut.edu.vn/">HỌC VỤ</a></li>
                {/* <li><a href="">Contact</a></li> */}
            </ul>
            <button className='btn'>Đăng Nhập</button>
            <div onClick={handleClick} className={click ? 'overlay active' : 'overlay'}></div>
        </div>
    </div>
  )
}

export default NavBar2