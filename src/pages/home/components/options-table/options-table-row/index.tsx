import React, { FC, useCallback } from "react";
import { Option } from "../../../interfaces/Option";
import HomeScreenOptionsTableItem from "../options-table-item";

type Props = {
  isHeaderRow?: boolean;
  option: Option;
  hasChoices?: boolean;
  isChoiceItem?: boolean;
}

const HomeScreenOptionsTableRow: FC<Props> = (props) => {
  const { isHeaderRow = false, isChoiceItem = false, hasChoices = false, option } = props;

  const resolveClassName = useCallback((name: string) => {
    if (isHeaderRow) {
      return name + '--head';
    } else {
      return name;
    }
  }, [isHeaderRow]);

  const optionKeys = Object.keys(option).filter(key => key !== 'id' && key !== 'choices');

  return (
    <div 
      className={resolveClassName('options-panel__table-row')}
      draggable={!isHeaderRow}>
      <div className="table-item">
        <input 
          className="table-item__checkbox"
          type="checkbox" 
          name="select-table-item" 
          id="select-table-item"
        />
      </div>
      {optionKeys.map((key, i) => (
        <HomeScreenOptionsTableItem 
          key={key}
          resolvedClassName={resolveClassName('table-item')} 
          title={option[key]} 
          isHeaderRow={isHeaderRow}
          isChoiceItem={isChoiceItem}
          hasChoices={hasChoices}
          isItemName={i === 0}
        />
      ))}
    </div>
  );
};

export default HomeScreenOptionsTableRow;
