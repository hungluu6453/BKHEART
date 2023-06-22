import React from 'react'
import './feature.css'
import { HiOutlineMicrophone, HiOutlineChat} from 'react-icons/hi'
// import {SiRobotframework} from 'react-icons/si'
import {BiBot} from 'react-icons/bi'
// import {BsChatText} from 'react-icons/bs'
// import {CiMicrophoneOn} from 'react-icons/ci'

function Feature() {
  return (
    <div className="feature-container section-padding" id='feature-section' >
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#1488d8" offset="0%" />
          <stop stopColor="#030391" offset="100%" />
        </linearGradient>
      </svg>
      <div className="text-wrapper">
        <h1 className='gradient-text'>Tính năng</h1>
        <h2>Hệ thống sẽ giúp bạn tự động giải đáp các thắc mắc mà không cần phải tốn công sức tìm và đọc các đoạn quy định dài dòng.</h2>
      </div>
      <div className="feature-wrapper">
        <div className="feature-item">
          <h3 className='feature-icon'><HiOutlineChat  /></h3>
          <div className="feature-item-text">Hỏi về các vấn đề liên quan đến quy định, tìm kiếm chương trình đào tạo hoặc thông tin giảng viên mà bạn cần.</div>
        </div>
        <div className="feature-item">
          <h3 className='feature-icon'><BiBot style={{ stroke: "url(#blue-gradient)" }}/></h3>
          <div className="feature-item-text">Trò chuyện với hệ thống, xây dựng thành một cuộc hội thoại hoàn chỉnh.</div>
        </div>
        <div className="feature-item">
          <h3 className='feature-icon'><HiOutlineMicrophone /></h3>
          <div className="feature-item-text">Sử dụng giọng nói hoặc đánh máy một cách linh hoạt.</div>
        </div>
      </div>
    </div>
  )
}

export default Feature