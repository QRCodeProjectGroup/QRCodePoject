import React from 'react';
import image from '../../images/kapak.jpg'
import users from '../../images/users1.png'
import like from '../../images/like.png'
import star from '../../images/star.png'
import ok from '../../images/ok.png'
import './Restaurant.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';

function Restaurant(props){
  AOS.init();
  AOS.refresh();
    return(
<div className="row">
    <div className="col-sm-6">
    <div className="card bg-dark text-white" id="res" data-aos="fade-right"
     data-aos-duration="800">
  <img src={image} className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <div className="kapakDiv">
    <h5 className="card-title">CEM MIDIK RESTORAN</h5>
    <p className="card-text">Beyazevler Mah. Esentepe Sk.  Gazievler Cd.<br/> No:25 Adana/TURKIYE <br/> www.mıdıkcem.com</p>
    </div>
  </div>
</div>
    </div>
    <div className="col-sm-6">
        <div className="row">
    <div className="card rounded-3" id="roundedCard" data-aos="flip-right"
     data-aos-duration="900">
      <div className="card-body">
          <img src={users}></img>
        <h5 className="card-title" id="a">2 Haftadaki Ziyaret:</h5>
        <p className="card-text" id="a">599</p>
       
      </div>
      </div>
      <div className="card rounded-3" id="roundedCard" data-aos="flip-right"
     data-aos-duration="900">
      <div className="card-body">
      <img src={like}></img>
        <h5 className="card-title" id="a">Toplam Beğeni:</h5>
        <p className="card-text" id="a">1539</p>
       
      </div>
      </div>
      <div className="card rounded-3" id="roundedCard" data-aos="flip-right"
     data-aos-duration="900">
      <div className="card-body">
      <img src={star}></img>
        <h5 className="card-title" id="a">Restoran Puanı:</h5>
        <p className="card-text" id="a">8/10</p>
       
      </div>
      </div>
      <div className="card rounded-3" id="roundedCard" data-aos="flip-right"
     data-aos-duration="900">
      <div className="card-body">
      <img src={ok}></img>
        <h5 className="card-title" id="a">Ort sipariş hızı</h5>
        <p className="card-text" id="a">20 dk.</p>
        
      </div>
    </div>
</div>
</div>

</div>

    )
}
export default Restaurant