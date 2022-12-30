import React, { FC } from "react";

type Props = {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

const HomeScreenMainMenuItem: FC<Props> = (props) => {
  const { title, isActive = false, onClick } = props;

  return (
    <li onClick={onClick} className={`main-menu-item ${isActive && 'main-menu-item_active'}`}>
      {title}
    </li>
  );
};

export default HomeScreenMainMenuItem;
