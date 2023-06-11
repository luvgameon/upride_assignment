import React, { useState } from 'react';
import "./TopBar.css";
import plusicon from '../../assets/plus.svg';
import searchicon from '../../assets/searchicon.svg';
import Profile from '../SmartComp/Profile';


export default function TopBar() {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="topbar">
            <div className="searchbar">
                <input type="text" placeholder="Search Bookings" className="searchbarinput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <img src={searchicon} alt="search" title="search" className="searchicon" />
            </div>
            <div className="newbookingbutton">
                <img src={plusicon} alt="plus" className="" />
                New Booking
            </div>
            <Profile name={"Luv"}/>
         
        </div>
    )
}
