import React from 'react'
import TopBar from '../Components/Navbar/TopBar';
import './Home.css';
import BookingDetails from '../Components/Booking/BookingDetails';

export default function Home() {
  return (
    <div className='home'>
        <TopBar/>
        <BookingDetails/>
    </div>
  )
}
