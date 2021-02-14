import React from 'react';
import mail from '../../images/email1.jpg';
import dilos from '../../images/dilos.jpeg';
import cem from '../../images/cem1.jpg';
import './Contact.css'

function Contact(props){
    return(

        <>
        <div className="row">
            <img data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" id="mail" src={mail}></img>
        </div>
        <div className="row">
            <h3 id="iletisim">Bizimle İletişime Geçin :)</h3>
        </div>
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-3">
            <div class="card" id="contactCard">
  <img src={dilos} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Frontend Developer</h5>
    <p class="card-text">Çukurova Üniversitesi Bilgisayar Mühendisliği</p>
  </div>
  <ul class="list-group list-group-flush" id="ulColor">
  <li class="list-group-item">İsim:Dilaray Çam</li>
    <li class="list-group-item">Mail:dilaray@gmail.com</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="overlay">
  <input type="email" class="form-control" id="colFormLabel" placeholder="Mesaj..."/>
    <div class="text"><button class="btn btn-primary" id="siparisButon">Mesaj Gönder</button></div>
  </div>
</div>
            </div>
            <div className="col-sm-3">
            <div class="card" id="contactCard">
  <img src={cem} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Backend Developer</h5>
    <p class="card-text">Çukurova Üniversitesi Edebiyat Bölümü</p>
  </div>
  <ul class="list-group list-group-flush" id="ulColor">
  <li class="list-group-item">İsim:Cem Nisan</li>
    <li class="list-group-item">Mail:cem@gmail.com</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <div class="overlay">
  <input type="email" class="form-control" id="colFormLabel" placeholder="Mesaj..."/>
    <div class="text"><button class="btn btn-primary" id="siparisButon">Mesaj Gönder</button></div>
  </div>
</div>
            </div>
            <div className="col-sm-3"></div>
        </div>
        </>
    )
}

export default Contact