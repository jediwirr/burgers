import React from "react";
import Button from "../../../../ui/components/button";
import HomeScreenOptionsTable from "../options-table";

const HomeScreenOptionsPanel = () => {
  return (
    <div className="options-panel">
      <>
        <div className="options-panel__head">
          <h3 className="options-panel__title">Начинка</h3>
          <div className="close-button">
            <img src={require('/assets/images/close/close.png')} alt="close" />
          </div>
        </div>
        <div className="options-panel__actions">
          <Button title="Ингредиент" onClick={() => console.log('click')} />
          <Button title="Группа" onClick={() => console.log('click')} />
        </div>

        <HomeScreenOptionsTable />
      </>



      <div className="options-panel__head">
        <h3 className="options-panel__title">Основа</h3>
        <div className="close-button">
          <img src={require('/assets/images/close/close.png')} alt="close" />
        </div>
      </div>
      <div className="options-panel__actions">
        <Button title="Ингредиент" onClick={() => console.log('click')} />
        <Button title="Группа" onClick={() => console.log('click')} />
      </div>

      <Button title="Новый блок" onClick={() => console.log('click')} outline={false} />
    </div>
  );
};

export default HomeScreenOptionsPanel;
