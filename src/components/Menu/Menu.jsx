import React from 'react';
import './Menu.css';
import data from '../../data/data.json';
import MenuCard from './MenuCard';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

function Menu(props){
  AOS.init();
  AOS.refresh();
  
  const foodItems = data.foods.filter(
    item => item.isActive).map(
    (item) =>(
       
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

    return(
      <>
              <div className="row">
                <div className="col">
              <div class="card" id="cardAlign" data-aos="zoom-out-down" data-aos-duration="900">
  <div class="card-body">
      <center>
      <h1>MENÜ</h1>
      </center>
      <hr color="gray"/>
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