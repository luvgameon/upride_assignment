import React, { useEffect, useState } from 'react';

import "./BookingDetails.css";
import view from "../../assets/view.svg";
// import Row from './Row';
import Table from './Table';
const url = "https://upride-internships-default-rtdb.firebaseio.com/.json";



export default function BookingDetails() {
  const [activeBookings, setActiveBookings] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);
  const [cancelledBookings, setCancelledBookings] = useState([]);
  const [PageIndex, setPageIndex] = useState(0);

  const fetchDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      let temp = Object.values(data);
      temp = temp.map((item) => Object.values(item));
      temp = temp.flat();
    
      setActiveBookings(
        temp
          .filter((booking) => booking.bookingStatus === "SUCCESS")
          .sort((first, last) => last.bookingEpochTime-first.bookingEpochTime)
      );

      setCompletedBookings(
        temp
          .filter((booking) => booking.bookingStatus === "COMPLETED")
          .sort((first, last) => last.bookingEpochTime-first.bookingEpochTime)
      );

      setCancelledBookings(
        temp
          .filter((booking) => booking.bookingStatus === "CANCELLED")
          .sort((first, last) => last.bookingEpochTime-first.bookingEpochTime)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails(url);
  }, []);

  

  return (
    <div className="viewbooking">
        <div className="viewbookingtitle">
            <div className="viewertitletext">
                View Bookings
            </div>
            <img src={view} alt="viewbookingsicon" className="viewerimage" />
            <div className="featurebox"></div>
        </div>
        <div className="tabs">
            <div
              type="button"
              className={PageIndex === 0 ? "tab selected cursor" : "tab cursor"}
              onClick={() => setPageIndex(0)}
            >
              Active
            </div>
            <div
              className={PageIndex === 1 ? "tab selected cursor" : "tab cursor"}
              type="button"
              onClick={() => setPageIndex(1)}
            >
              Completed
            </div>
            <div
              className={PageIndex === 2 ? "tab selected cursor" : "tab cursor"}
              type="button"
              onClick={() => setPageIndex(2)}
            >
              Cancelled
            </div>
          </div>
          <div >
            {PageIndex === 0 ? <Table bookings={activeBookings} /> : <></>}
            {PageIndex === 1 ? <Table bookings={completedBookings} /> : <></>}
            {PageIndex === 2 ? <Table bookings={cancelledBookings} /> : <></>}
          </div>
    </div>
  )
}