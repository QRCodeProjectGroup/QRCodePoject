import React from 'react';
import contactData from './contactData';
import mail from '../../../images/email1.jpg';
import './Contact.css'

function Contact(props) {
  const { data } = contactData
  const contactItem = data.map((item, index) => {
    return (
      <div className="col-sm-3" key={index}>
        <div className="card" id="contactCard">
          <img src={item.photo} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.area}</h5>
            <p className="card-text">{item.university}</p>
          </div>
          <ul className="list-group list-group-flush" id="ulColor">
            <li className="list-group-item">İsim:{item.name}</li>
            <li className="list-group-item">Mail:{item.mail}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
          <div className="overlay">
            <input type="email" className="form-control" id="colFormLabel" placeholder="Mesaj..." />
            <div className="text"><button className="btn btn-primary" id="siparisButon">Mesaj Gönder</button></div>
          </div>
        </div>
      </div>
    )
  })
  return (

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
        {contactItem}
      </div>
    </>
  )
}

export default Contact