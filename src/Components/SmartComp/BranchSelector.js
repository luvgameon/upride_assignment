import React, { useState } from 'react';
import "./BranchSelector.css";
import locationicon from '../../assets/location.svg'

export default function BranchSelector({ locationtitle, children }) {
    const [closed, setClosed] = useState(false);
    return (
        <div className="branchselector">
            <div className="branchselectortitle">
                <img src={locationicon} alt="location" title="location" className="locationimage" />
                <h2 className="locationtitle">{locationtitle}</h2>
                <div style={{cursor:'pointer'}} onClick={() => setClosed(prev => !prev)} className={"branchselectordropdown" + (closed ? " closed" : "")}></div>
            </div>
            {(!closed) &&
                <div className="branches">
                    {children}
                </div>}
        </div>
    )
}
