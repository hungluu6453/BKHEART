import React from 'react'
import './header.css'
import logo from '../../assets/chatBot.png'
import { Link } from 'react-router-dom';
import 'animate.css';

function Header() {
  return (
    <div className='header-container section-padding' id='header-section'>
        <h1 className='gradient-text'>Hệ thống trí tuệ nhân tạo BK Heart</h1>
        <h2>Hỏi và trò chuyện về các vấn đề học vụ một cách dễ dàng và nhanh chóng.</h2>
        <Link to="/chat"><button className='btn'>Bắt đầu ngay</button></Link>
        <img src={logo} alt="" />
    </div>
  )
}

export default Header