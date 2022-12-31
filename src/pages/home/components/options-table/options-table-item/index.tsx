import React, { FC, useCallback } from "react";

type Props = {
  title: string;
  resolvedClassName: string;
  isItemName?: boolean;
  isChoiceItem?: boolean;
}

const HomeScreenOptionsTableItem: FC<Props> = (props) => {
  const { title, resolvedClassName, isItemName = false, isChoiceItem = false } = props;

  const resolveTitleClassName = useCallback(() => {
    if (isChoiceItem && isItemName) {
      return 'table-item__item-title--choice';
    } else {
      return 'table-item__item-title';
    }
  }, [isChoiceItem, isItemName]);

  return (
    <div className={resolvedClassName}>
      <p className={resolveTitleClassName()}>{title}</p>
    </div>
  );
};

export default HomeScreenOptionsTableItem;
