import React, { useContext } from 'react';
import RestaurantData from './RestaurantData';
import image from '../../images/kapak.jpg'
import './Restaurant.css'

function Restaurant(props) {

  const { place } = props
  
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div>
          <div className="card bg-dark text-white" id="res" >
            <img src={image} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <div className="kapakDiv">
                <h5 className="card-title" id="titleText">{place.placeName}</h5>
                <p className="card-text" id="titleText"> {place.adress} <br /> {place.webSite}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-sm-6" id="resCol">
          <RestaurantData 
          totalVisit ={place.totalVisit}
          totalLike = {place.totalLike}
          point = {place.point}
          orderSpeed = {place.orderSpeed}
          />
        </div>
      </div>
    </>
  )
}
export default Restaurant