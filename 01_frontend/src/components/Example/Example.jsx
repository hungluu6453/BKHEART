import React from 'react'
import './example.css'
import { Link } from 'react-router-dom'
// import {HiOutlineDesktopComputer, HiOutlineMicrophone, HiOutlineChat} from 'react-icons/hi'

function Example() {
  return (
    <div className="example-container section-padding" id='example-section' >
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#1488d8" offset="0%" />
          <stop stopColor="#030391" offset="100%" />
        </linearGradient>
      </svg>
      <div className="text-wrapper">
        <h1 className='gradient-text'>Câu hỏi mẫu</h1>
        {/* <h2>Ask your questions short, long or anything in between. The more precise you ask, the better the answer.</h2> */}
      </div>
      <div className="example-wrapper">
        <div className="example-item">
          <p className="example-question">Tôi muốn tìm thông tin liên lạc của thầy Nguyễn Minh H ?</p>
          {/* <p className="example-answer"><span><strong>Answer:</strong> This is the answer</span></p> */}
        </div>
        <div className="example-item">
          <p className="example-question">Số tín chỉ tối thiểu phải đăng kí trong một học kì là bao nhiêu vậy ?</p>
          {/* <p className="example-answer"><span><strong>Answer:</strong> This is the answer 2</span></p> */}
        </div>
        <div className="example-item">
          <p className="example-question">Mình muốn viết đơn xin rút môn học thì phải làm thế nào ?</p>
          {/* <p className="example-answer"><span><strong>Answer:</strong> This is the answer 3</span></p> */}
        </div>
      </div>
      <div>
        <Link to="/chat"><button className='btn'>Bắt đầu ngay</button></Link>
      </div>
    </div>
  )
}

export default Example