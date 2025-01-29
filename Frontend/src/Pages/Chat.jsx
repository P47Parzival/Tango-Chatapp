import React from 'react'
import Rightpart from '../components/Rightpart'
import Leftpart from '../components/Leftpart'

const Chat = () => {
  return (
    <div className='pt-10 grid grid-cols-2 gap-4'>
      <Rightpart></Rightpart>
      <Leftpart></Leftpart>
    </div>
  )
}

export default Chat
