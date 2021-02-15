import React from 'react';
import './Menu.css'
import photos from '../../../data/photos'


function MenuCard(props) {
  const {id,title} = props
  return (
    <>
      <div className="row">
        <div className="col">
          <div class="card bg-dark text-white" id="cardBody" >

            <img src={photos[`${id}`]} id="image" class="card-img" alt="..." />
            <div class="card-img-overlay" id="cardImg">
              <div id="baslik">
                <a class="card-title" href={`#${title.toLowerCase()}`} id="cardTitle">{props.title}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MenuCard