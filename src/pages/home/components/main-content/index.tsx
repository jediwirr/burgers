import React from "react";

import mainMenu from '../../data/main-menu.json';

const HomeScreenMainContent = () => {
  return (
    <div className="content">
      <nav>
        <ul className="main-menu-first">
          {mainMenu.map(item => (
            <li key={item.id} className="main-menu-first-item">
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HomeScreenMainContent;
