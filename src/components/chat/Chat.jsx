import React from 'react'
import Messages from '../messange/Messages'
import UserPostMessage from './UserPostMessage'
import HeaderChat from './HeaderChat'

export default function Chat() {
  return (
    <div className='Chat'>
        <HeaderChat/>
        <Messages/>
        <UserPostMessage/>
    </div>
  )
}
