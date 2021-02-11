import React from 'react';
import {Link} from 'react-router-dom';
import detail from '../../data/detail.json';
import detailPhotos from '../../data/detailfoto.js';
import data from '../../data/data.json';
import './Menu.css';

function MenuDetailCard(props){

const cardItems = detail.details.filter(
        item => item.isActive).map(
        (item) =>(
           <>
            <div className="col-sm-3" key={item.id} >
               <div class="card mt-5" id="cardColor">
  <img src={detailPhotos[`${item.id}`]} class="card-img-top" alt="..."/>
 
</div>
            </div>
            <div className="col-sm-9 mt-5">
<h5>{item.title} <p id="textAlign">{item.fiyat}</p></h5>
<hr/>
<p>{item.detail}</p>

            </div>
            </>
        )
    )
const mealItems = data.foods.filter(
        item => item.isActive).map(
        (item) =>(
           
            <div className="row mt-5" key={item.id} >
               <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <Link class="breadcrumb-item" to={`/menu/${item.title}`}>{item.title}</Link>
    
  </ol>
</nav>
            </div>
        )
    )
    return(
<>
{mealItems}

<div className="row">
    <h2 id="h">Kahvaltı Menüsü</h2>
  
    </div>
    <div className="row">
        
    {cardItems}
    
</div>
</>
    )
}
export default MenuDetailCard