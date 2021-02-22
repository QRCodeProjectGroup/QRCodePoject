import React from "react";
import contactData from "./contactData";
import mail from "../../../images/email1.jpg";
import "./Contact.css";

function Contact(props) {
  const { data } = contactData;
  const contactItem = data.map((item, index) => {
    return (
      <div className="col-sm-3 py-4 ms-3" key={index}>
        <div className="card" id="contactCard">
          <img src={item.photo} id="roundedPhoto" alt="Jane" className="mt-4"/>
          <div className="container">
            <h3 id="isim">{item.name}</h3>
            <h4>{item.area}</h4>
            <p>{item.university}</p>
            <p>Email: {item.mail}<br/>
            Github: <a href={item.github}>{item.username}</a></p>
            <p>
              <button id="contactButton" className="btn btn-light mb-4">
               <a href={item.linkedin}>Linkedin</a>
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="row">
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          id="mail"
          src={mail}
        ></img>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          
            {contactItem}
          
        </div>
      </div>
    </>
  );
}

export default Contact;
