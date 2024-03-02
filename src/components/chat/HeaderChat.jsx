import React from 'react'
import userImg from '../../assets/images/userImg.png'


export default function HeaderChat() {
  return (
    <div className='HeaderChat'>
          <div className="userImg">
            <img src={userImg} alt="" />
        </div>
        <div className="userTitle">
            <p className="userName">John Doe</p>
            <span className="userSet">online</span>
        </div>
    </div>
  )
}
