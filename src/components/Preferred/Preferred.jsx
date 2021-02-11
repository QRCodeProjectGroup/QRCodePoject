import React from 'react';
import arkaplan from '../../images/arkaplan3.png'
import likebutton from '../../images/likebutton.png'
import comment from '../../images/comment.png'
import hamburger from '../../images/hamburgermenu.png'
import patates from '../../images/patates.png'
import pizza from '../../images/pizza.png'
import './Preferred.css'


function Preferred(props){
    return(
<div className="row">
<div className="col">
<div class="card">
  <div class="card-body">
      <center>
      <h1>En Çok Tercih Edilenler</h1>
      </center>
      <hr color="gray"/>
  <div className="row">
  <div className="col-sm-4">
  <div class="card bg-dark text-white" id="cardHover">
  <img id="arkaplanR" src={arkaplan} class="card-img" alt="..."/>
  <div class="card-img-overlay">
      <img id="patatoes" src={patates}></img>
    <h5 class="card-title">Kızartma Tabağı</h5>
    <p class="card-text">Sigara böreği,nugget,sosis ve soslar <img src={likebutton}></img> <img src={comment}></img></p>
    <div class="overlay">
    <div class="text"><button class="btn btn-primary" id="siparisButon">Sipariş ver</button></div>
  </div>
  </div>
</div>
</div>
<div className="col-sm-4">
<div class="card bg-dark text-white" id="cardHover">
  <img id="arkaplanR" src={arkaplan} class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <img id="patatoes" src={hamburger}></img>
    <h5 class="card-title">Hamburger Menü</h5>
    <p class="card-text">Hamburger,patates kızartması ve kola<img src={likebutton}></img> <img src={comment}></img></p>
    <div class="overlay">
    <div class="text"><button class="btn btn-primary" id="siparisButon">Sipariş ver</button></div>
  </div>
  </div>
  </div>
</div>
<div className="col-sm-4">
<div class="card bg-dark text-white" id="cardHover">
  <img id="arkaplanR" src={arkaplan} class="card-img" alt="..."/>
  <div class="card-img-overlay">
  <img id="patatoes" src={pizza}></img>
    <h5 class="card-title">Pizza Menü</h5>
    <p class="card-text">Pizza,patates kızartması ve kola <img src={likebutton}></img> <img src={comment}></img></p>
    <div class="overlay">
    <div class="text"><button class="btn btn-primary" id="siparisButon">Sipariş ver</button></div>
  </div>
  </div>
  </div>
</div>
  </div>
</div>
</div>
</div>
</div>

    )
}
export default Preferred