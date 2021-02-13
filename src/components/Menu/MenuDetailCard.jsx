import React from 'react';
import detailPhotos from '../../data/detailfoto.js';
import './Menu.css';
import menu from '../../data/menus.json'

function MenuDetailCard(props){

const cardItems = menu.data.map((item,index) =>
        item.cesitler.map((item2,index) =>(
           <>
          
            <div className="col-sm-3" key={item2.id} >
               <div class="card mt-5" id="cardColor">
  <img src={detailPhotos[`${item2.id}`]} class="card-img-top" alt="..."/>
 
</div>
            </div>
            <div className="col-sm-9 mt-5" >
<h5>{item2.title} <p id="textAlign">{item2.fiyat}</p></h5>
<hr/>
<p>{item2.detail}</p>

            </div>
            </>
        )
        )
    )

    return(
<>
<div className="row">
      <h2 id="h">Kahvaltı Menüsü</h2>
    
      </div>
  <div className="row" id="kahvaltiSofrasi">
  
  </div>
<div className="container">
    <div className="row">
        
    {cardItems}
    
</div>
</div>
</>
    )
}
export default MenuDetailCard