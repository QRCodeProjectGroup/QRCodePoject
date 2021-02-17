import React from 'react';

function RestaurantDetail(props) {
    const { restaurantData } = props;
    return (
        <>
            {
                restaurantData.data.map((item, index) => {
                    return (
                        <div className="card rounded-3" id="roundedCard" key={index} >
                            <div className="card-body">
                                <img src={item.photo} alt="..."></img>
                                <h5 className="card-title" id="a">{item.title}</h5>
                                <p className="card-text" id="a">{item.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RestaurantDetail;