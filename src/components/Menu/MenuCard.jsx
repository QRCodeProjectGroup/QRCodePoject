import React from 'react';
import './Menu.css'
import photos from '../../data/photos'
import 'aos/dist/aos.css'; 
import AOS from 'aos';


function MenuCard(props){
AOS.init();
AOS.refresh();
  
    return(
      <>
<div className="row">
    <div className="col">
        <div class="card bg-dark text-white" id="cardBody" data-aos="flip-left"  data-aos-duration="800">
            
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