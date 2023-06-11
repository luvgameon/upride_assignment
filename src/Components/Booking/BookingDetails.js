import React from 'react'
import './BookingDetails.css'
import view from '../../assets/view.svg'

export default function BookingDetails() {
  return (
    <div className='bookingview'>View Bookings <img src={view} alt="img" className='icon'/></div>
  )
}
