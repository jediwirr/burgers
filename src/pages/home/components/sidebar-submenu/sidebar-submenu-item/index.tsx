import React, { FC } from "react";

type Props = {
  title: string;
  selected: boolean;
  onClick: () => void;
}

const SidebarSubmenuItem: FC<Props> = (props) => {
  const { title, selected, onClick } = props;

  return (
    <li onClick={onClick} className={`sidebar__submenu-item ${selected && 'selected'}`}>
      <span>{title}</span>
    </li>
  );
};

export default SidebarSubmenuItem;
