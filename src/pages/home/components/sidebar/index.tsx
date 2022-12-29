import React from "react";
import HomeScreenSidebarMenu from "../sidebar-menu";

const HomeScreenSidebar = () => {
  return (
      <div className="sidebar">
        <div className="logo-wrapper">
          <img className="logo" src={require('/assets/images/logo/logo.png')} alt="logo" />
          <p>Добро пожаловать</p>
          <p>в “Фабрику бургеров”</p>
        </div>
        <hr className="separator"/>
        <HomeScreenSidebarMenu />
      </div>
  )
}

export default HomeScreenSidebar;
