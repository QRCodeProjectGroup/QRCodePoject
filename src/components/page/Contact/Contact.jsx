import React from 'react';
import contactData from './contactData';
import mail from '../../../images/email1.jpg';
import './Contact.css'

function Contact(props) {
  const { data } = contactData
  const contactItem = data.map((item, index) => {
    return (
      <div className="col-sm-4" key={index}>
        <div className="card" id="contactCard">
          <img src={item.photo} alt="Jane" />
          <div className="container">
            <h3>{item.name}</h3>
            <h4>{item.area}</h4>
            <p>{item.university}</p>
            <p>Email:{item.mail}</p>
            <p><button id="contactButton" className="button">Contact</button></p>
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
        <div className="col-sm-4"></div>
        {contactItem}
        <div className="col-sm-4"></div>
      </div>
    </>
  )
}

export default Contact