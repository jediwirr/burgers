import React from "react";
import Button from "../../../../ui/components/button";

const HomeScreenOptionsPanel = () => {
  return (
    <div className="options-panel">
      <p>Начинка</p>
      <div className="options-panel__actions">
        <Button title="Ингредиент" onClick={() => console.log('click')} />
        <Button title="Группа" onClick={() => console.log('click')} />
      </div>

      <p>Основа</p>
      <div className="options-panel__actions">
        <Button title="Ингредиент" onClick={() => console.log('click')} />
        <Button title="Группа" onClick={() => console.log('click')} />
      </div>

      <Button title="Новый блок" onClick={() => console.log('click')} outline={false} />
    </div>
  );
};

export default HomeScreenOptionsPanel;
