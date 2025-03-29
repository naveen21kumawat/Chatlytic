import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

function ChatBox() {
  return (
<div className="chat-box">
  <div className="chat-user">
    <img src={assets.profile_img} alt="" />
    <p>Richard SanFord <img className='dot' src={assets.green_dot} alt="" /></p>
    <img src={assets.help_icon} className="help" alt="" />
  </div>
  <div className="chat-input"></div>
</div>
  )
}

export default ChatBox