import React from 'react';
import './Menu.css'
import photos from '../../../data/photos'


function MenuCard(props) {
  const {id,title} = props
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card bg-dark text-white" id="cardBody" >

            <img src={photos[`${id}`]} id="image" className="card-img" alt="..." />
            <div className="card-img-overlay" id="cardImg">
              <div id="baslik">
                <a className="card-title" href={`#${title.toLowerCase()}`} id="cardTitle">{props.title}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MenuCard