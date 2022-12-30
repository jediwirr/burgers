import React, { FC, useState } from "react";
import { MenuItem } from "../../interfaces/MenuItem";
import SidebarSubmenuItem from "./sidebar-submenu-item";

type Props = {
  submenu?: MenuItem[];
  isExpanded?: boolean;
}

const HomeScreenSidebarSubMenu: FC<Props> = (props) => {
  const { submenu, isExpanded = false } = props;
  const [selectedItemId, setSelectedItemId] = useState<number>(1);

  return (
    <nav className={`sidebar__submenu ${!isExpanded && 'hidden'}`}>
      <ul>
        {submenu && submenu.map(item => (
          <SidebarSubmenuItem 
            onClick={() => setSelectedItemId(item.id)} 
            key={item.id} 
            title={item.title} 
            selected={item.id === selectedItemId} 
          />
        ))}
      </ul>
    </nav>
  );
};

export default HomeScreenSidebarSubMenu;