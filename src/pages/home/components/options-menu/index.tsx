import React, { useState } from "react";
import HomeScreenOptionsMenuItem from "./options-menu-item";

import optionsMenu from '../../data/options-menu.json';

const HomeScreenOptionsMenu = () => {
  const [activeItemId, setActiveItemId] = useState(1);
  
  return (
    <nav className="options-menu">
      <ul>
        {optionsMenu.map(item => (
          <HomeScreenOptionsMenuItem 
            onClick={() => setActiveItemId(item.id)} 
            title={item.title} 
            isActive={item.id === activeItemId} 
          />
        ))}
      </ul>
    </nav>
  );
};

export default HomeScreenOptionsMenu;
