import React, { useContext, useState } from 'react';
import { globalContext } from '../../../data/context';
import detailPhotos from '../../../data/detailfoto.js';
import './Menu.css';
import MenuDetail from './MenuDetail';
import Popup from '../../page/PopUp/PopUp';

function MenuDetailCard(props) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
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
                        <input
                            type="button"
                            value="Yorumlar"
                            onClick={togglePopup}
                        />
                        {isOpen && <Popup
                            content={<>
                                <b>Yorumlar</b>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <button>Test button</button>
                            </>}
                            handleClose={togglePopup}
                        />}
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