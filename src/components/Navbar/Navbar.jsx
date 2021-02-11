import React from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';
import image from '../../images/menüüsepeti.png'


function Navbar(props){

  const linkItems = props.links.filter(item => item.isLink).map((item,index) =>
  (
      <li className="nav-link" key={index}>
      <Link to={item.link} className="nav-link">
          {item.title}
      </Link>
      </li>
      
  )
  )
  const linkItems2 = props.links.filter(item => item.isTrue).map((item2,index) =>
  (
      <li className="nav-link" key={index}>
      <Link to={item2.link} className="nav-link">
          {item2.title1}
      </Link>
      </li>
      
  )
  )

    return(
<div className="row">
  <div className="col">
  <nav class="navbar navbar-expand-lg bg-transparent " id="navbarColor">

  <div class="container-fluid">
    <div id="topnav-centered">
    <Link class="navbar-brand" to="/">MENU SEPETİ</Link>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav">
      {linkItems}
      </div>
      <div class="navbar-nav ml-auto pe-5" >
        {linkItems2}
         </div>
    </div>
  </div>

</nav>
</div>
</div>
    )
}
export default Navbar