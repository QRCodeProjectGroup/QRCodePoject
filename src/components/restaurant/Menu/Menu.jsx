import React from 'react';
import './Menu.css';
import data from '../../../data/data.json';
import MenuCard from './MenuCard';
import { useTranslation } from 'react-i18next';

function Menu(props) {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  const foodItems = data.foods.filter(
    item => item.isActive).map(
      (item) => (

        <div className="col-sm-3" key={item.id} >
          <MenuCard
            id={item.id}
            title={t(`${item.title}.1`)}
          />
        </div>
      )
    )

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card" id="cardAlign">
            <div className="card-body">
              <center>
                <h1 id="menuTitle">MENÜ</h1>
              </center>
              <hr color="gray" />
              <div className="row">
                {foodItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Menu