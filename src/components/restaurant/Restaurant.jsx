import React, { useContext } from 'react';
import { globalContext } from '../../data/context';
import RestaurantData from './RestaurantData';
import image from '../../images/kapak.jpg'
import './Restaurant.css'

function Restaurant(props) {
  const { place } = useContext(globalContext);
  return (
    <>
      {
        place && place.map((item, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-sm-6">
                <div className="card bg-dark text-white" id="res" >
                  <img src={image} className="card-img" alt="..." />
                  <div className="card-img-overlay">
                    <div className="kapakDiv">
                      <h5 className="card-title">{item.placeName}</h5>
                      <p className="card-text"> {item.adress} <br /> {item.webSite}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <RestaurantData item={item} />
              </div>
            </div>
          )
        })
      }
    </>
  )
}
export default Restaurant