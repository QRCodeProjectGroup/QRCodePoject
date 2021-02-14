import React, { useContext } from 'react';
import { globalContext } from '../../data/context';
import detailPhotos from '../../data/detailfoto.js';
import './Menu.css';
import MenuDetail from './MenuDetail';

function MenuDetailCard(props) {
    const { title } = props;
    const { details } = useContext(globalContext)

    let cardItems;

    details && details.filter(item => item.menuName.toLowerCase() === title).map(item => {
        cardItems = item.detail && item.detail.map((value, index) => {
            return (
                <>
                    <div className="col-sm-3" key={index} >
                        <div class="card mt-5" id="cardColor">
                            <img src={detailPhotos[`${index}`]} class="card-img-top" alt="..." />

                        </div>
                    </div>
                    <div className="col-sm-9 mt-5" >
                        <h5>{value.product} <p id="textAlign">{value.price}</p></h5>
                        <hr />
                        <p>{value.content}</p>

                    </div>
                </>
            )
        })
    })

    return (
        <>
            <div className="row">
                <h2 id="h">{title.charAt(0).toUpperCase() + title.slice(1)} Menü</h2>

            </div>
            <MenuDetail cardItems={cardItems} />
        </>
    )
}
export default MenuDetailCard