import React from 'react'
import './Chat.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ChatBox from '../../components/ChatBox/ChatBox'
import RigthSidebar from '../../components/RigthSidebar/RigthSidebar'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSidebar/>
        <ChatBox/>
        <RigthSidebar/>
        </div> </div>
  )
}

export default Chat