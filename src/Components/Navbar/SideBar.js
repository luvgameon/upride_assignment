import React from "react";
import "./SideBar.css";
import logo from "../../assets/logo.svg";
import SideBarMenu from "./SideBarMenu";
import BranchName from "../SmartComp/BranchName";
import BranchSelector from "../SmartComp/BranchSelector";

export default function SideBar() {
  return (
    <div className="sidebar">
      
        <img src={logo} alt="logo" className="logo" />
        <BranchSelector locationtitle="Rajarajeshwari Nagar">
                <BranchName branchname="Branch2" selected={true} />
                <BranchName branchname="Branch3" />
            </BranchSelector>
        
        <SideBarMenu/>
        <div className="square"></div>
    </div>
  );
}
