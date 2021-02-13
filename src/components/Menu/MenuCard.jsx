import React from 'react';
import './Menu.css'
import photos from '../../data/photos'


function MenuCard(props){

  
    return(
      <>
<div className="row">
    <div className="col">
        <div class="card bg-dark text-white" id="cardBody">
            
        <img src={photos[`${props.id}`]} id="image" class="card-img" alt="..."/>
        <div class="card-img-overlay" id="cardImg">
        <div id="baslik">
          <a class="card-title" href={`#${props.title}`} id="cardTitle">{props.title}</a>
          </div>
        </div>
      </div>
      </div>
      </div>
      
  </>
    )
}

export default MenuCard