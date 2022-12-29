import React from "react";
import HomeScreenSidebar from "./components/sidebar";
import HomeScreenMainContent from "./components/main-content";

const HomeScreen = () => {
  return (
    <div className="container">
      <HomeScreenSidebar />
      <HomeScreenMainContent />
    </div>
  )
}

export default HomeScreen
