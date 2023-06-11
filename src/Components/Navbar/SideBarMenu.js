import React from 'react'
import './SideBarMenu.css';
import homeicon from '../../assets/homeicon.svg';
import earningicon from '../../assets/myearningsicon.svg';
import serviceicon from '../../assets/myservicesicon.svg';
import assestsicon from '../../assets/myassetsicon.svg';

export default function SideBarMenu() {
  return (
    <div className="menu">
        <div className="menubutton selected">
            <img src={homeicon} alt="home" title="home" className="menuicon" />
            Home
        </div>
        <div className="menubutton">
            <img src={earningicon} alt="myearnings" title="myearnings" className="menuicon" />
            My Earnings
        </div>
        <div className="menubutton">
            <img src={serviceicon} alt="myservices" title="myservices" className="menuicon" />
            My Services
        </div>
        <div className="menubutton">
            <img src={assestsicon} alt="myassets" title="myassets" className="menuicon" />
            My Assets
        </div>
    </div>
  )
}

