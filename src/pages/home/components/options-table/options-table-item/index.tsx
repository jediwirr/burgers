import React, { FC, useCallback } from "react";

type Props = {
  title: string;
  resolvedClassName: string;
  isHeaderRow?: boolean;
  isItemName?: boolean;
  isChoiceItem?: boolean;
  hasChoices?: boolean;
}

const HomeScreenOptionsTableItem: FC<Props> = (props) => {
  const { 
    title, 
    resolvedClassName, 
    isHeaderRow = false,
    isItemName = false, 
    isChoiceItem = false, 
    hasChoices = false 
  } = props;

  const resolveTitleClassName = useCallback(() => {
    if (isChoiceItem && isItemName) {
      return 'table-item__item-title--choice';
    } else if (isItemName && hasChoices) {
      return 'table-item__item-title_bold';
    } else {
      return 'table-item__item-title';
    }
  }, [isChoiceItem, isItemName]);

  return (
    <div className={resolvedClassName}>
      {!isHeaderRow && isItemName ? 
        <input className={resolveTitleClassName()} 
          type="text" 
          name="input" 
          defaultValue={title}
        /> 
        : <p className={resolveTitleClassName()}>
          {title}
        </p>
      }
    </div>
  );
};

export default HomeScreenOptionsTableItem;
