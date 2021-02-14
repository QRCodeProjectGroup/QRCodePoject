import React, { useContext } from 'react';
import detailPhotos from '../../data/detailfoto.js';
import './Menu.css';
import menu from '../../data/menus.json'
import MenuDetail from './MenuDetail';

function MenuDetailCard(props) {
    const { title } = props;
    const { data } = menu
    let cardItems
    data.filter(item => item.ogunIsmi.toLocaleLowerCase() === title)
        .map(item => {
            cardItems = item.cesitler.map((detail, index) => {
                return (
                    <>
                        <div className="col-sm-3" key={detail.id} >
                            <div class="card mt-5" id="cardColor">
                                <img src={detailPhotos[`${detail.id}`]} class="card-img-top" alt="..." />

                            </div>
                        </div>
                        <div className="col-sm-9 mt-5" >
                            <h5>{detail.title} <p id="textAlign">{detail.fiyat}</p></h5>
                            <hr />
                            <p>{detail.detail}</p>

                        </div>
                    </>
                )
            })
        })
    return (
        <>
            <div className="row">
                <h2 id="h">{title} Menüsü</h2>

            </div>
            <MenuDetail cardItems={cardItems} />
        </>
    )
}
export default MenuDetailCard