import React, { useState } from "react";
import "./Table.css";

function formatDate(timestamp) {
  const date = new Date(timestamp);

  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

function Table({ bookings }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentBookings = bookings.slice(startIndex, endIndex);

  const totalPages = Math.ceil(bookings.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <table className="datatable">
        <thead>
          <tr className="datacolumnheadings">
            <th>Name</th>
            <th>Date</th>
            <th>Package Details</th>
            <th>Payment Mode</th>
          </tr>
        </thead>
        <tbody className="datarows">
          {currentBookings.map((booking) => (
            <tr key={booking.bookingID} className="booking">
             
                    <td className="namedata">
                    <img
                    src={booking.workshopImage}
                    width={30}
                    height={30}
                    alt=""
                    className="bookingimage"
                  /> 

{" "} <span > {booking.clientName}</span>
                 
                    </td>
                
            
              <td className="datedata">
                {formatDate(booking.bookingEpochTime)}
              </td>
              <td className="packagedetailsdata">{booking.packageTitle}</td>
              {(booking.offlineBooking) ?
                <td className="paymentmodedata offline"><div>Offline Payment</div></td>
                :
                <td className="paymentmodedata online"><div>Online Payment</div></td>}
             
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <div
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={currentPage === pageNumber ? "currentpage" : "page"}
            >
              {pageNumber}
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Table;