import React, { FC, useState } from "react";
import { MenuItem } from "../../../interfaces/MenuItem";
import HomeScreenSidebarSubMenu from "../../sidebar-submenu";

type Props = {
  title: string;
  submenu?: MenuItem[];
}

const SidebarMenuItem: FC<Props> = (props) => {
  const { title, submenu } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onSelectItem = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <li onClick={onSelectItem} className="sidebar__menu-item">
        {title}
      </li>
      <HomeScreenSidebarSubMenu submenu={submenu} isExpanded={isExpanded} />
    </>
  );
};

export default SidebarMenuItem;
