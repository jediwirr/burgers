import React, { useState } from "react";
import HomeScreenMainMenuItem from "./main-menu-item";

import mainMenu from '../../data/main-menu.json';

const HomeScreenMainMenu = () => {
  const [activeItemId, setActiveItemId] = useState(1);
  
  return (
    <nav className="main-menu">
      <ul>
        {mainMenu.map(item => (
          <HomeScreenMainMenuItem 
            onClick={() => setActiveItemId(item.id)} 
            title={item.title} 
            isActive={item.id === activeItemId} 
          />
        ))}
      </ul>
    </nav>
  );
};

export default HomeScreenMainMenu;
