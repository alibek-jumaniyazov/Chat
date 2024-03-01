import React from 'react'
import Users from '../components/user/Users'
import Chats from '../components/chat/Chats'

export default function Dashboard() {
    return (
        <div className='Dashboard'>
            <Users />
            <Chats />
        </div>
    )
}
