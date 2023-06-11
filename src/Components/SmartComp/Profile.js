import React from 'react'
import './Profile.css';
import profile from '../../assets/profile.jpeg'

export default function Profile({name}) {
  return (
    <div className='profile'>
       
 <img src={profile} alt="profile" className='profileicon' />
       
        <div className='text'>
            Hello {name} 👋!
        </div>
    </div>
  )
}
