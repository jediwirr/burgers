import React from "react";
import { MenuItem } from "../../interfaces/MenuItem";

import sidebarMenu from '../../data/sidebar-menu.json';
import SidebarMenuItem from "./sidebar-menu-item";

const HomeScreenSidebarMenu = () => {
  return (
    <nav className="sidebar__menu">
      <ul>
        {sidebarMenu.map((item: MenuItem) => (
          <SidebarMenuItem 
            key={item.id} 
            submenu={item.submenu} 
            title={item.title} 
          />
        ))}
      </ul>
    </nav>
  );
};

export default HomeScreenSidebarMenu;
