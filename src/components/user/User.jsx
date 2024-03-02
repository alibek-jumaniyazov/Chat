import React from 'react'
import userImg from '../../assets/images/userImg.png'

export default function User() {
  return (
    <div className='User'>
        <div className="userImg">
            <img src={userImg} alt="" />
        </div>
        <div className="userTitle">
            <p className="userName">John Doe</p>
            <span className="userMessangeUi">user messange</span>
            
        </div>
    </div>
  )
}
