import React from "react";
import HomeScreenMainMenu from "../main-menu";
import HomeScreenOptionsMenu from "../options-menu";
import HomeScreenOptionsPanel from "../options-panel";

const HomeScreenMainContent = () => {
  return (
    <div className="content">
      <HomeScreenMainMenu />

      <h1 className="content__title">Классический</h1>
      <HomeScreenOptionsMenu />
      <HomeScreenOptionsPanel />
    </div>
  );
};

export default HomeScreenMainContent;
