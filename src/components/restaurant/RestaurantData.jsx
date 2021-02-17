import React from 'react';
import RestaurantDetail from './RestaurantDetail';
import users from '../../images/users1.png'
import like from '../../images/like.png'
import star from '../../images/star.png'
import ok from '../../images/ok.png'

function RestaurantData(props) {

    const { totalVisit, totalLike, point, orderSpeed } = props;
    const restaurantData = {
        "data": [
            {
                "photo": users,
                "title": "2 Haftadaki Ziyaret:",
                "text": totalVisit
            },
            {
                "photo": like,
                "title": "Toplam Beğeni:",
                "text": totalLike
            },
            {
                "photo": star,
                "title": "Restoran Puanı:",
                "text": point
            },
            {
                "photo": ok,
                "title": "Ort. Sipariş Hızı",
                "text": orderSpeed
            },

        ]
    }
    return (
        <div className="row">
            <RestaurantDetail restaurantData={restaurantData} />
        </div>
    )
}

export default RestaurantData;