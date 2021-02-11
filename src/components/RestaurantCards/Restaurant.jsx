import React from 'react';
import image from '../../images/kapak.jpg'
import users from '../../images/users1.png'
import like from '../../images/like.png'
import star from '../../images/star.png'
import ok from '../../images/ok.png'
import './Restaurant.css'

function Restaurant(props){
    return(
<div className="row">
    <div className="col-sm-6">
    <div class="card bg-dark text-white" id="res">
  <img src={image} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <div className="kapakDiv">
    <h5 class="card-title">CEM MIDIK RESTORAN</h5>
    <p class="card-text">Beyazevler Mah. Esentepe Sk.  Gazievler Cd.<br/> No:25 Adana/TURKIYE <br/> www.mıdıkcem.com</p>
    </div>
  </div>
</div>
    </div>
    <div className="col-sm-6">
        <div className="row">
    <div className="card rounded-3" id="roundedCard">
      <div className="card-body">
          <img src={users}></img>
        <h5 className="card-title" id="a">2 Haftadaki Ziyaret:</h5>
        <p className="card-text" id="a">599</p>
       
      </div>
      </div>
      <div className="card rounded-3" id="roundedCard">
      <div className="card-body">
      <img src={like}></img>
        <h5 className="card-title" id="a">Toplam Beğeni:</h5>
        <p className="card-text" id="a">1539</p>
       
      </div>
      </div>
      <div className="card rounded-3" id="roundedCard">
      <div className="card-body">
      <img src={star}></img>
        <h5 className="card-title" id="a">Restoran Puanı:</h5>
        <p className="card-text" id="a">8/10</p>
       
      </div>
      </div>
      <div class="card rounded-3" id="roundedCard">
      <div class="card-body">
      <img src={ok}></img>
        <h5 class="card-title" id="a">Ort sipariş hızı</h5>
        <p class="card-text" id="a">20 dk.</p>
        
      </div>
    </div>
</div>
</div>

</div>

    )
}
export default Restaurant