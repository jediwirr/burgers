import React, { FC } from "react";

type Props = {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

const HomeScreenOptionsMenuItem: FC<Props> = (props) => {
  const { title, isActive = false, onClick } = props;

  return (
    <li onClick={onClick} className={`options-menu-item ${isActive && 'options-menu-item_active'}`}>
      {title}
    </li>
  );
};

export default HomeScreenOptionsMenuItem;
