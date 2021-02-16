import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import image from '../../images/menüüsepeti.png'


function Navbar(props) {
  console.log(props)

  const linkItems = props.links.filter(item => item.isLink).map((item, index) =>
  (
    <li className="nav-link" key={index}>
      <Link to={item.link} className="nav-link">
        {item.title}
      </Link>
    </li>

  )
  )
  console.log(linkItems[0])
  const linkItems2 = props.links.filter(item => item.isTrue).map((item2, index) =>
  (
    <li className="nav-link" key={index}>
      <Link to={item2.link} className="nav-link">
        {item2.title1}
      </Link>
    </li>

  )
  )

  return (
    <div className="row">
      <div className="col">
        <nav className="navbar navbar-expand-lg bg-transparent " id="navbarColor">
          <div className="container-fluid">
            <div id="topnav-centered">
              <Link className="navbar-brand" to={linkItems[0]}>MENU SEPETİ</Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {linkItems}
              </div>
              <div className="navbar-nav ml-auto pe-5" >
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