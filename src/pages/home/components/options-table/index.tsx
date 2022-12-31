import React from "react";
import HomeScreenOptionsTableRow from "./options-table-row";

import options from '../../data/options.json';

const HomeScreenOptionsTable = () => {
  const optionHeadings = {
    id: 0,
    title: 'Название',
    weight: 'Вес',
    value: 'Ккал',
    note: 'Примечание',
  };

  return (
    <>
      <HomeScreenOptionsTableRow
        key={optionHeadings.id}
        isHeaderRow 
        option={optionHeadings}
      />
      {options.map(item => (
        <>
          <HomeScreenOptionsTableRow
            key={item.id}
            option={item}
          />
          {item.choices && item.choices.map(choice => (
            <HomeScreenOptionsTableRow
              key={choice.id}
              option={choice}
              isChoiceItem
            />
          ))}
        </>
      ))}
    </>
  );
};

export default HomeScreenOptionsTable;
