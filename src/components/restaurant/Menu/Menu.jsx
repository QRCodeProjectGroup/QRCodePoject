import React from 'react';
import './Menu.css';
import data from '../../../data/data.json';
import MenuCard from './MenuCard';

function Menu(props) {

  const foodItems = data.foods.filter(
    item => item.isActive).map(
      (item) => (

        <div className="col-sm-3" key={item.id} >
          <MenuCard
            id={item.id}
            title={item.title}
            detail={item.detail}
            fiyat={item.fiyat}

          />
        </div>
      )
    )

  return (
    <>
      <div className="row">
        <div className="col">
          <div class="card" id="cardAlign">
            <div class="card-body">
              <center>
                <h1>MENÜ</h1>
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