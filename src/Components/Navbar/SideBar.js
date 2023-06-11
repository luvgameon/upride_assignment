import React from "react";
import "./SideBar.css";
import logo from "../../assets/logo.svg";
import SideBarMenu from "./SideBarMenu";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <SideBarMenu/>
      </div>
    </div>
  );
}
