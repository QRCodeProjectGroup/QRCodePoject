import React, { useContext } from 'react';
import { globalContext } from '../../data/context';
import image from '../../images/kapak.jpg'
import users from '../../images/users1.png'
import like from '../../images/like.png'
import star from '../../images/star.png'
import ok from '../../images/ok.png'
import './Restaurant.css'

function Restaurant(props) {
  const {place} = useContext(globalContext);
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
                <div className="row">
                  <div className="card rounded-3" id="roundedCard" >
                    <div className="card-body">
                      <img src={users}></img>
                      <h5 className="card-title" id="a">2 Haftadaki Ziyaret:</h5>
                      <p className="card-text" id="a">{item.totalVisit}</p>

                    </div>
                  </div>
                  <div className="card rounded-3" id="roundedCard" >
                    <div className="card-body">
                      <img src={like}></img>
                      <h5 className="card-title" id="a">Toplam Beğeni:</h5>
                      <p className="card-text" id="a">{item.totalLike}</p>

                    </div>
                  </div>
                  <div className="card rounded-3" id="roundedCard" >
                    <div className="card-body">
                      <img src={star}></img>
                      <h5 className="card-title" id="a">Restoran Puanı:</h5>
                      <p className="card-text" id="a">{item.point}</p>

                    </div>
                  </div>
                  <div className="card rounded-3" id="roundedCard" >
                    <div className="card-body">
                      <img src={ok}></img>
                      <h5 className="card-title" id="a">Ort sipariş hızı</h5>
                      <p className="card-text" id="a">{item.orderSpeed}</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

    </>

  )
}
export default Restaurant