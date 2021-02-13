import React from 'react';
import detail from '../../data/detail.json';
import detailPhotos from '../../data/detailfoto.js';
import './Menu.css';
import menu from '../../data/menus.json'
import 'aos/dist/aos.css'; 
import AOS from 'aos';


function MenuDetailCard(props){
AOS.init();
AOS.refresh();

const cardItems = menu.data.map((item,index) =>
        item.cesitler.map((item2,index) =>(
           <>
          
            <div className="col-sm-3" key={item2.id} >
               <div class="card mt-5" id="cardColor" data-aos="fade-right" data-aos-duration="900">
  <img src={detailPhotos[`${item2.id}`]} class="card-img-top" alt="..."/>
 
</div>
            </div>
            <div className="col-sm-9 mt-5" >
<h5 id="titleStyle" data-aos="fade-left" data-aos-duration="900">{item2.title} 
<p data-aos="fade-left" data-aos-duration="900" id="textAlign">{item2.fiyat}</p></h5>
<hr/>
<p data-aos="fade-left" data-aos-duration="900">{item2.detail}</p>

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