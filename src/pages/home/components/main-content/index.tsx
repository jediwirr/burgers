import React from "react";
import HomeScreenMainMenu from "../main-menu";
import HomeScreenOptionsMenu from "../options-menu";
import HomeScreenOptionsPanel from "../options-panel";

const HomeScreenMainContent = () => {
  return (
    <div className="content">
      <HomeScreenMainMenu />

      <p>Классический</p>
      <HomeScreenOptionsMenu />
      <HomeScreenOptionsPanel />
    </div>
  );
};

export default HomeScreenMainContent;
