import React, { FC } from "react";
import HomeScreenOptionsTableRow from "./options-table-row";
import Button from "../../../../ui/components/button";

type Props = {
  title: string;
  options?: any[];
}

const HomeScreenOptionsTable: FC<Props> = (props) => {
  const { title, options } = props;

  const optionHeadings = {
    id: 0,
    title: 'Название',
    weight: 'Вес',
    value: 'Ккал',
    note: 'Примечание',
  };

  return (
    <div className="options-panel__table">
      <div className="table__head">
        <div className="table__title-wrapper">
          <h3 className="table__title">{title}</h3>
          <img className="close-button" src={require('/assets/images/close/close.png')} alt="close" />
        </div>
        <div className="table__actions">
          <Button title="Ингредиент" onClick={() => console.log('click')} />
          <Button title="Группа" onClick={() => console.log('click')} />
        </div>
      </div>
      <HomeScreenOptionsTableRow
        key={optionHeadings.id}
        isHeaderRow 
        option={optionHeadings}
      />
      {options?.map(item => (
        <>
          <HomeScreenOptionsTableRow
            key={item.id}
            option={item}
            hasChoices={item.choices.length > 0}
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
    </div>
  );
};

export default HomeScreenOptionsTable;
